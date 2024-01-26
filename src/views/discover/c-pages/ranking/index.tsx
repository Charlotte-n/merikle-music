import React, { memo, useEffect, useRef, useState } from 'react'
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
import { useLocation, useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  location: any
}

const Ranking = (props: any) => {
  //获取排行榜的数据
  const { rankingId } = useAppSelector((state) => {
    return {
      rankingId: state.songRankingSlice.rankingId
    }
  }, shallowEqual)
  const [searchParam] = useSearchParams()
  const [songListId, setSongListId] = useState(
    searchParam.get('id') as number | string
  )
  const [pageIndex, setPageIndex] = useState(1)

  const getPageIndex = (val: number) => {
    setPageIndex(val)
  }
  const location = useLocation()
  //@ts-ignore

  const dispatch = useAppDispatch()
  useEffect(() => {
    setSongListId(searchParam.get('id') as string)

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
  }, [songListId, pageIndex, location])

  return (
    <RankingWrapper className="wrap-v2">
      <div className="song_ranking">
        <SongRanking></SongRanking>
      </div>
      <div className="ranking_detail">
        <RankingDetail getPageIndex={getPageIndex}></RankingDetail>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
