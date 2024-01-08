import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import SongRanking from 'src/views/discover/c-pages/ranking/c-pages/song-ranking'
import RankingDetail from 'src/views/discover/c-pages/ranking/c-pages/ranking-detail'
import { RankingWrapper } from '@/views/discover/c-pages/ranking/style'
import { useAppDispatch } from '@/store'
import { fetchSongRankingListAction } from '@/views/discover/c-pages/ranking/store'
import {
  fetchCommentListAction,
  fetchHotSongListDataAction
} from '@/views/song_detail/store'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const [songListId, setSongListId] = useState(0)
  const [pageIndex, setPageIndex] = useState(1)
  const getSongListId = (val: number) => {
    setSongListId(val)
  }
  const getPageIndex = (val: number) => {
    setPageIndex(val)
    console.log(val)
  }
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSongRankingListAction())
    dispatch(
      fetchHotSongListDataAction(songListId == 0 ? 19723756 : songListId)
    )
    dispatch(
      fetchCommentListAction({
        id: songListId == 0 ? 19723756 : songListId,
        offset: (pageIndex - 1) * 50
      })
    )
    return () => {}
  }, [songListId, pageIndex])

  return (
    <RankingWrapper className="wrap-v2">
      <div className="song_ranking">
        <SongRanking getSongListId={getSongListId}></SongRanking>
      </div>
      <div className="ranking_detail">
        <RankingDetail getPageIndex={getPageIndex}></RankingDetail>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
