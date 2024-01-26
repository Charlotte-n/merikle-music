import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchRecommendDataAction,
  fetchRecommendRank
} from '@/views/discover/c-pages/recommend/store'
import TopBanner from '@/views/discover/c-pages/recommend/c-cpns/top-banner'
import { ContentWrapper } from '@/views/discover/style'
import HotRecommend from '@/views/discover/c-pages/recommend/c-cpns/hot-recommend'
import { shallowEqual, useDispatch } from 'react-redux'
import NewAlbums from '@/views/discover/c-pages/recommend/c-cpns/new-albums'
import RecommendRank from '@/views/discover/c-pages/recommend/c-cpns/recommend-rank'
import Login from '@/views/discover/c-pages/recommend/c-cpns/Login'
import RightSingers from '@/views/discover/c-pages/recommend/c-cpns/right_singers'
import HotArchor from '@/views/discover/c-pages/recommend/c-cpns/hot-archor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  //获取轮播图的数据,发起action获取数据
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRecommendRank())
  }, [])
  //获取歌单数据
  const { hotRecommendSongs } = useAppSelector((state) => {
    return {
      hotRecommendSongs: state.recommend.hotRecommendSongs
    }
  }, shallowEqual)
  return (
    <div>
      <TopBanner></TopBanner>
      <ContentWrapper className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbums></NewAlbums>
          <RecommendRank></RecommendRank>
        </div>
        <div className="right">
          <Login></Login>
          <RightSingers></RightSingers>
          <HotArchor></HotArchor>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default memo(Recommend)
