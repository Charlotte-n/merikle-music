import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AblumsWrapper } from '@/views/discover/c-pages/albums/style'
import AlbumsHeader from '@/views/discover/c-pages/albums/c-pages/albums-header'
import AlbumsContent from '@/views/discover/c-pages/albums/c-pages/albums-content'
import { useAppDispatch } from '@/store'
import {
  fetchAlbumSongListData,
  fetchCategorySongListAction
} from '@/views/discover/c-pages/albums/store'
interface IProps {
  children?: ReactNode
}

const Albums: FC<IProps> = () => {
  const [HeaderCatogory, setHeaderCatogory] = useState('')
  const getHeaderCategory = (val: string) => {
    setHeaderCatogory(val)
  }
  // @ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAlbumSongListData())
    dispatch(fetchCategorySongListAction(HeaderCatogory))
    return () => {}
  }, [HeaderCatogory])

  return (
    <AblumsWrapper>
      <div className="albums-content wrap-v2">
        <AlbumsHeader getHeaderCategory={getHeaderCategory}></AlbumsHeader>
        <AlbumsContent></AlbumsContent>
      </div>
    </AblumsWrapper>
  )
}

export default memo(Albums)
