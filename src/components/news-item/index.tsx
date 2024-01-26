import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewsItemWrapper } from '@/components/news-item/style'
import albums from '@/views/discover/c-pages/albums'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  albums?: any
}

const NewsItem: FC<IProps> = (props) => {
  const { albums } = props
  const navigate = useNavigate()
  const gotoAlbumDetail = (id: number) => {
    navigate('/album/detail?id=' + id)
  }
  return (
    <NewsItemWrapper>
      <div className="newsitem">
        {/*  图片*/}
        <div className="image" onClick={() => gotoAlbumDetail(albums?.id)}>
          <img src={albums?.picUrl} alt="" loading={'lazy'} />
          <a href="" className="sprite_cover cover"></a>
        </div>
        {/*  文字*/}
        <div
          className="title ellipsis_1"
          onClick={() => gotoAlbumDetail(albums?.id)}
        >
          {albums?.name}
        </div>
      </div>
    </NewsItemWrapper>
  )
}

export default memo(NewsItem)
