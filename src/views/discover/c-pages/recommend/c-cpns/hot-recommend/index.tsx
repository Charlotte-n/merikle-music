import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import CommendHeader from '@/components/app-header-w1'
import { ContentWrapper } from '@/views/discover/c-pages/recommend/c-cpns/hot-recommend/style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { singleHotRecommendSong } from '@/views/discover/c-pages/recommend/services/types'
import SongsItem from '@/components/songs-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
  const subtitles = ['华语', '流行', '摇滚', '民谣', '电子']
  const { hotRecommendSongs } = useAppSelector((state) => {
    return {
      hotRecommendSongs: state.recommend.hotRecommendSongs
    }
  }, shallowEqual)
  return (
    <div>
      <CommendHeader
        title="热门推荐"
        subtitles={subtitles}
        moreText={'更多'}
        moreLink="/discover/songs"
      ></CommendHeader>
      <ContentWrapper>
        {hotRecommendSongs?.map((item) => {
          return (
            <div className="song_item" key={item.id}>
              <SongsItem hotRecommendSong={item}></SongsItem>
            </div>
          )
        })}
      </ContentWrapper>
    </div>
  )
}

export default memo(HotRecommend)
