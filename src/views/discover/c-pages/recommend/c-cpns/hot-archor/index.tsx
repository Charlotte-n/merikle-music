import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotArchorWrapper } from '@/views/discover/c-pages/recommend/c-cpns/hot-archor/style'
import AppHeaderW2 from '@/components/app-header-w2'
import HotArchoItem from '@/views/discover/c-pages/recommend/components/hotarcho-item'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotArchor: FC<IProps> = () => {
  const { Artilist } = useAppSelector((state) => {
    return {
      Artilist: state.recommend.Artilist
    }
  })
  return (
    <HotArchorWrapper>
      <AppHeaderW2></AppHeaderW2>
      {Artilist.slice(0, 5).map((item, index) => {
        return (
          <div key={index} className="artlist_item">
            <HotArchoItem itemData={item}></HotArchoItem>
          </div>
        )
      })}
    </HotArchorWrapper>
  )
}

export default memo(HotArchor)
