import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingDetailWrapper } from '@/views/discover/c-pages/ranking/c-pages/ranking-detail/style'
import SongList from '@/views/song_detail/components/song-list'
import RankingDetailTop from '@/views/discover/c-pages/ranking/components/ranking-detail-top'
import Comment from '@/views/song_detail/components/comment'

interface IProps {
  children?: ReactNode
  getPageIndex: (val: number) => void
}

const RankingDetail: FC<IProps> = (props) => {
  const { getPageIndex } = props
  return (
    <RankingDetailWrapper>
      <RankingDetailTop></RankingDetailTop>
      <SongList></SongList>
      <Comment
        getPageIndex={getPageIndex}
        param={{
          t: 0,
          type: 2,
          id: 1
        }}
      ></Comment>
    </RankingDetailWrapper>
  )
}

export default memo(RankingDetail)
