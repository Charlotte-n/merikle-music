import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  LyricDetailLeftWrapper,
  LyricDetailRightWrapper,
  LyricDetailWrapper
} from '@/views/lyric-detail/style'
import LyricSong from '@/views/lyric-detail/c-pages/lyric-songs/index'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchLyricDetailAction } from '@/views/lyric-detail/store'
import NavBar from '@/views/discover/nav-bar'
import Comment from '@/views/song_detail/components/comment'
import { fetchLyricCommentAction } from '@/views/song_detail/store'
import SimilarSong from '@/views/lyric-detail/c-pages/similar-song'
import SimilarPlaylist from '@/views/lyric-detail/c-pages/similar-playlist'

interface IProps {
  children?: ReactNode
}

const LyricDetailPage: FC<IProps> = (props) => {
  const [search] = useSearchParams()
  const ids = search.get('ids')
  const [pageSize, setPageSize] = useState(1)
  const getPageIndex = (val: number) => {
    setPageSize(val)
  }
  //获取数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchLyricDetailAction(ids!))
    dispatch(
      fetchLyricCommentAction({
        id: String(ids),
        limit: 20,
        offset: (pageSize - 1) * 20
      })
    )
    return () => {}
  }, [pageSize, ids])

  return (
    <div>
      <NavBar></NavBar>
      <LyricDetailWrapper className={'wrap-v2'}>
        <LyricDetailLeftWrapper>
          {/*上面的歌曲的歌词*/}
          <LyricSong></LyricSong>
          <Comment getPageIndex={getPageIndex}></Comment>
        </LyricDetailLeftWrapper>
        <LyricDetailRightWrapper>
          {/*包含这首歌的歌单*/}
          <div className={'playlist'}>
            <SimilarPlaylist></SimilarPlaylist>
          </div>
          {/* 相似歌曲 */}
          <div className={'song'}>
            <SimilarSong></SimilarSong>
          </div>
        </LyricDetailRightWrapper>
      </LyricDetailWrapper>
    </div>
  )
}

export default memo(LyricDetailPage)
