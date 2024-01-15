import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import SongRanking from 'src/views/discover/c-pages/ranking/c-pages/song-ranking'
import RankingDetail from 'src/views/discover/c-pages/ranking/c-pages/ranking-detail'
import { RankingWrapper } from '@/views/discover/c-pages/ranking/style'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchSongRankingListAction } from '@/views/discover/c-pages/ranking/store'
import {
  fetchCommentListAction,
  fetchHotSongListDataAction
} from '@/views/song_detail/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  //获取排行榜的数据
  const { rankingId } = useAppSelector((state) => {
    return {
      rankingId: state.songRankingSlice.rankingId
    }
  }, shallowEqual)
  const [songListId, setSongListId] = useState(rankingId)
  const [pageIndex, setPageIndex] = useState(1)
  const getSongListId = (val: number) => {
    setSongListId(val)
  }
  const getPageIndex = (val: number) => {
    setPageIndex(val)
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
        <SongRanking
          getSongListId={getSongListId}
          songListId={songListId}
        ></SongRanking>
      </div>
      <div className="ranking_detail">
        <RankingDetail getPageIndex={getPageIndex}></RankingDetail>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
