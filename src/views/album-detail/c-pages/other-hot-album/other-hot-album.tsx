import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  HotAlbumListHeader,
  HotAlbumListWrapper
} from '@/views/album-detail/c-pages/other-hot-album/styled'
import { HotSongListContent } from '@/views/song_detail/components/hot-songlist/style'

interface IProps {
  children?: ReactNode
}

const HotAlbumList: FC<IProps> = () => {
  return (
    <HotAlbumListWrapper>
      <HotAlbumListHeader>Ta的其他热门专辑</HotAlbumListHeader>
      <HotSongListContent></HotSongListContent>
    </HotAlbumListWrapper>
  )
}

export default memo(HotAlbumList)
