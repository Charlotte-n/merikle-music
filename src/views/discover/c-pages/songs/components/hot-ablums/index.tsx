import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAlbumsWrapper } from '@/views/discover/c-pages/songs/components/hot-ablums/style'
import NewsItem from '@/components/news-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotAlbums: FC<IProps> = () => {
  const { HotAlbums } = useAppSelector((state) => {
    return {
      HotAlbums: state.AlbumsSlice.HotAlbums
    }
  }, shallowEqualApp)

  return (
    <HotAlbumsWrapper>
      <div className="main">热门新碟</div>
      <div className="albums">
        {HotAlbums.map((item) => {
          return (
            <div className="albums_item" key={item.id}>
              <NewsItem albums={item}></NewsItem>
            </div>
          )
        })}
      </div>
    </HotAlbumsWrapper>
  )
}

export default memo(HotAlbums)
