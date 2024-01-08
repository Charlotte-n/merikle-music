import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumsContentWrapper } from '@/views/discover/c-pages/albums/c-pages/albums-content/style'
import SongsItem from '@/components/songs-item'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import AlbumsPagination from '@/views/discover/c-pages/albums/c-pages/albums-pagination'

interface IProps {
  children?: ReactNode
}

const AlbumsContent: FC<IProps> = () => {
  const [index, setIndex] = useState(1)
  const { AlbumsSongList } = useAppSelector((state) => {
    return {
      AlbumsSongList: state.albumsSongList.albumsList
    }
  }, shallowEqual)
  const getPageSize = (val: number) => {
    setIndex(val)
  }

  return (
    <div>
      <AlbumsContentWrapper>
        {AlbumsSongList?.slice((index - 1) * 50, index * 50).map(
          (item: any, index: any) => {
            return (
              <div key={index} className="song_item">
                <SongsItem albumsSongList={item as any}></SongsItem>
              </div>
            )
          }
        )}
      </AlbumsContentWrapper>
      <AlbumsPagination
        getPageSize={getPageSize}
        total={AlbumsSongList?.length}
      ></AlbumsPagination>
    </div>
  )
}

export default memo(AlbumsContent)
