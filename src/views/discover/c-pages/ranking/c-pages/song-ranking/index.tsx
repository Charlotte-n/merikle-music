import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongRankingWrapper } from '@/views/discover/c-pages/ranking/c-pages/song-ranking/style'
import RankingItem from '@/views/discover/c-pages/ranking/components/ranking_item'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
  getId: any
}

const SongRanking: FC<IProps> = ({ getId }) => {
  //获取排行榜的数据
  const { rankingList } = useAppSelector((state) => {
    return {
      rankingList: state.songRankingSlice.rankingList
    }
  }, shallowEqual)
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <SongRankingWrapper>
      <div className="special_ranking">
        <RankingItem
          getId={getId}
          title={'云音乐特色榜单'}
          rankingList={rankingList.slice(0, 4)}
        ></RankingItem>
      </div>
      <div className="global_ranking">
        <RankingItem
          getId={getId}
          title={'全球媒体特色榜单'}
          rankingList={rankingList.slice(4)}
        ></RankingItem>
      </div>
    </SongRankingWrapper>
  )
}

export default memo(SongRanking)
