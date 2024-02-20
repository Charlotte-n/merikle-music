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
import { Spin } from 'antd'

interface IProps {
  children?: ReactNode
  location: any
}

const Ranking = (props: any) => {
  //获取排行榜的数据
  const [searchParam] = useSearchParams()
  const [songListId, setSongListId] = useState(searchParam.get('id') as string)
  const [pageIndex, setPageIndex] = useState(1)

  const getPageIndex = (val: number) => {
    setPageIndex(val)
  }

  const dispatch = useAppDispatch()
  const getId = (value: string) => {
    setSongListId(value)
  }
  useEffect(() => {
    dispatch(fetchHotSongListDataAction(songListId))
    dispatch(fetchSongRankingListAction())
  }, [songListId])
  useEffect(() => {
    dispatch(
      fetchCommentListAction({
        id: songListId,
        offset: pageIndex * 50
      })
    )
  }, [songListId, pageIndex])

  return (
    <RankingWrapper className="wrap-v2">
      <div className="song_ranking">
        <SongRanking getId={getId}></SongRanking>
      </div>
      <div className="ranking_detail">
        <RankingDetail getPageIndex={getPageIndex}></RankingDetail>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
