import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import CommendHeader from '@/components/app-header-w1'
import { RankingWrapper } from '@/views/discover/c-pages/recommend/c-cpns/recommend-rank/style'
import { useAppSelector } from '@/store'
import RankingItem from 'src/views/discover/c-pages/recommend/components/ranking-item'

interface IProps {
  children?: ReactNode
}

const RecommendRanking: FC<IProps> = () => {
  const { rankingSongs } = useAppSelector((state) => {
    return {
      rankingSongs: state.recommend.rankingSongs
    }
  })
  return (
    <RankingWrapper>
      <CommendHeader title="榜单" moreLink="/discover/ranking"></CommendHeader>
      {/*  背景图片*/}
      <div className="ranking_content">
        {/*  每一列榜单内容*/}
        {rankingSongs.map((item, index) => {
          return (
            <div className="col" key={index}>
              <RankingItem rankingSong={item}></RankingItem>
            </div>
          )
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(RecommendRanking)
