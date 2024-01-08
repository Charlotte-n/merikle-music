import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewsItemWrapper } from '@/components/news-item/style'
import albums from '@/views/discover/c-pages/albums'

interface IProps {
  children?: ReactNode
  albums?: any
}

const NewsItem: FC<IProps> = (props) => {
  const { albums } = props
  return (
    <NewsItemWrapper>
      <div className="newsitem">
        {/*  图片*/}
        <div className="image">
          <img src={albums?.picUrl} alt="" />
          <a href="" className="sprite_cover cover"></a>
        </div>
        {/*  文字*/}
        <div className="title ellipsis_1">{albums?.name}</div>
      </div>
    </NewsItemWrapper>
  )
}

export default memo(NewsItem)
