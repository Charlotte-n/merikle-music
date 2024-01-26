import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  LoveAlbumListHeader,
  LoveAlbumListPic,
  LoveAlbumListWrapper
} from '@/views/album-detail/c-pages/love-album-list/styled'

interface IProps {
  children?: ReactNode
}

const LoveAlbumList: FC<IProps> = () => {
  return (
    <LoveAlbumListWrapper>
      <LoveAlbumListHeader>喜欢这个专辑的人</LoveAlbumListHeader>
      <LoveAlbumListPic></LoveAlbumListPic>
    </LoveAlbumListWrapper>
  )
}

export default memo(LoveAlbumList)
