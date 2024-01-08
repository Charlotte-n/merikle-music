import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongDetailContent, SongDetailWrapper } from '@/views/song_detail/style'
import NavBar from '@/views/discover/nav-bar'
import LyricSong from '@/views/song_detail/components/lyric-song'
import SongList from '@/views/song_detail/components/song-list'
import Comment from '@/views/song_detail/components/comment'
import LoveSongList from '@/views/song_detail/components/love_songlist'
import HotSongList from '@/views/song_detail/components/hot-songlist'
import {
  fetchCommentListAction,
  fetchHotSongListDataAction
} from '@/views/song_detail/store'
import { useAppDispatch } from '@/store'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const SongDetail: FC<IProps> = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [search] = useSearchParams()
  const songId = search.get('id')
  const getPageIndex = (val: number) => {
    setPageIndex(val)
  }
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchHotSongListDataAction(songId as string))
    dispatch(
      fetchCommentListAction({
        id: Number(songId) == 0 ? 19723756 : songId,
        offset: (pageIndex - 1) * 50
      })
    )
    return () => {}
  }, [pageIndex, songId])

  return (
    <SongDetailWrapper>
      <NavBar></NavBar>
      <SongDetailContent className="wrap-v2">
        <div className="left">
          <LyricSong></LyricSong>
          <SongList></SongList>
          {/*  评论组件*/}
          <Comment getPageIndex={getPageIndex}></Comment>
        </div>
        <div className="right">
          <LoveSongList></LoveSongList>
          <HotSongList></HotSongList>
        </div>
      </SongDetailContent>
    </SongDetailWrapper>
  )
}

export default memo(SongDetail)
