import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerItemWrapper } from '@/views/discover/c-pages/recommend/components/singers-item/style'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}
const SingersItem: FC<IProps> = (props) => {
  const { itemData } = props
  const navigation = useNavigate()
  const handlegotoSinger = () => {
    navigation(`/singer/list?id=${itemData.id}`)
  }
  return (
    <SingerItemWrapper>
      <div className="singers_list" onClick={handlegotoSinger}>
        <div className="pic">
          <img src={itemData.img1v1Url} alt="" />
        </div>
        <div className="content">
          <div className="title">{itemData.name}</div>
          <div className="subtitle">{itemData.alias[0]}</div>
        </div>
      </div>
    </SingerItemWrapper>
  )
}

export default memo(SingersItem)
