import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeaderW2 from '@/components/app-header-w2'
import SingersItem from '@/views/discover/c-pages/recommend/components/singers-item/index'
import { useAppSelector } from '@/store'
import { RightSingersWrapper } from '@/views/discover/c-pages/recommend/c-cpns/right_singers/style'
import { NavLink, useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const RightSingers: FC<IProps> = () => {
  const { Artilist } = useAppSelector((state) => {
    return {
      Artilist: state.recommend.Artilist
    }
  })
  return (
    <RightSingersWrapper>
      <AppHeaderW2></AppHeaderW2>
      {Artilist.slice(0, 5).map((item, index) => {
        return <SingersItem key={index} itemData={item}></SingersItem>
      })}
      <NavLink className="button" to={'https://music.163.com/st/musician'}>
        <button style={{ cursor: 'pointer' }}>申请成为网易音乐人</button>
      </NavLink>
    </RightSingersWrapper>
  )
}

export default memo(RightSingers)
