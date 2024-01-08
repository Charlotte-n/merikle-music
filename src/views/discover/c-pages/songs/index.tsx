import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongesWrapper } from '@/views/discover/c-pages/songs/style'
import { useAppDispatch } from '@/store'
import {
  fetchAllAlbumsAction,
  fetchHotAlbumsAction
} from '@/views/discover/c-pages/songs/store'
import HotAlbums from 'src/views/discover/c-pages/songs/components/hot-ablums'
import AllAlbums from '@/views/discover/c-pages/songs/components/all-ablums'

interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  //获取新碟数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHotAlbumsAction())
    dispatch(fetchAllAlbumsAction({ limit: 50, area: 'ALL', offset: 0 }))
    return () => {}
  }, [])

  return (
    <SongesWrapper className="wrap-v2">
      <div className={'hot_album'}>
        <HotAlbums></HotAlbums>
      </div>
      <div className={'all_album'}>
        <AllAlbums></AllAlbums>
      </div>
    </SongesWrapper>
  )
}

export default memo(Songs)
