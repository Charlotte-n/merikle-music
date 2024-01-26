import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import NavBar from '@/views/discover/nav-bar'
import {
  AlbumDetailWrapper,
  AlbumsDetailContentWrapper
} from '@/views/album-detail/style'
import AlbumTotal from '@/views/album-detail/c-pages/album-total/album-total'
import SongList from '@/views/song_detail/components/song-list'
import Comment from '@/views/song_detail/components/comment'
import LoveAlbumList from '@/views/album-detail/c-pages/love-album-list/love-album-list'
import HotAlbumList from '@/views/album-detail/c-pages/other-hot-album/other-hot-album'
import { fetchAlbumDetailAction } from '@/views/album-detail/store'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import {
  fetchAlbumCommentAction,
  fetchAlbumDetailSongListAction
} from '@/views/song_detail/store'

interface IProps {
  children?: ReactNode
}

const AlbumDetail: FC<IProps> = () => {
  const [pageSize, setPageSize] = useState(1)
  const [SearchParam] = useSearchParams()
  const getPageIndex = (val: number) => {
    setPageSize(val)
  }
  //获取数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAlbumDetailAction(SearchParam.get('id') as string))
    dispatch(fetchAlbumDetailSongListAction(SearchParam.get('id') as string))
    dispatch(
      fetchAlbumCommentAction({
        id: SearchParam.get('id') as string,
        offset: 20
      })
    )
  }, [])
  return (
    <AlbumDetailWrapper>
      <NavBar></NavBar>
      <AlbumsDetailContentWrapper className={'wrap-v2'}>
        <div className="left">
          <AlbumTotal></AlbumTotal>
          <SongList></SongList>
          {/*  评论组件*/}
          <Comment
            getPageIndex={getPageIndex}
            param={{
              t: 0,
              type: 3,
              id: Number(SearchParam.get('id'))
            }}
          ></Comment>
        </div>
        <div className="right">
          <LoveAlbumList></LoveAlbumList>
          <HotAlbumList></HotAlbumList>
        </div>
      </AlbumsDetailContentWrapper>
    </AlbumDetailWrapper>
  )
}

export default memo(AlbumDetail)
