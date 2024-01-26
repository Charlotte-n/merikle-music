import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotArchoItemWrapper } from '@/views/discover/c-pages/recommend/components/hotarcho-item/style'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  itemData: any
}

const HotArchoItem: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const gotoSingerDetail = () => {
    navigate(`/singer/list?id=${itemData.id}`)
  }
  const { itemData } = props
  return (
    <HotArchoItemWrapper onClick={() => gotoSingerDetail()}>
      <div className="pic">
        <img src={itemData.img1v1Url} alt="" />
      </div>
      <div className="name">
        <div className="title">{itemData.name}</div>
        <div className="subtitle">{itemData.alias[0]}</div>
      </div>
    </HotArchoItemWrapper>
  )
}

export default memo(HotArchoItem)
