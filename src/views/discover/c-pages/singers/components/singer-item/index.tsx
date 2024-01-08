import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerItemWrapper } from '@/views/discover/c-pages/singers/components/singer-item/style'
import { Artist } from '@/views/discover/c-pages/singers/services/type'

interface IProps {
  children?: ReactNode
  data: Artist
}

const SingerItem: FC<IProps> = (props) => {
  const { data } = props
  return (
    <SingerItemWrapper>
      <div className="img">
        <img src={data.picUrl} alt="" />
      </div>
      <div className="singer_name">
        <span>{data.name}</span>
        <span>标志</span>
      </div>
    </SingerItemWrapper>
  )
}

export default memo(SingerItem)
