import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from '@/views/discover/c-pages/ranking/components/ranking_item/style.tex'
import { List } from '@/views/discover/c-pages/ranking/services/type'
import rankingItem from '@/views/discover/c-pages/recommend/components/ranking-item'
import { Skeleton } from 'antd'

interface IProps {
  children?: ReactNode
  title: string
  rankingList: List[]
  getSongListId: (val: number) => void
}

const RankingItem: FC<IProps> = (props) => {
  const [active, setActive] = useState(false)
  const { title, rankingList, getSongListId } = props
  const [rankingId, setRankingId] = useState(0)
  const handleSongListId = (val: number) => {
    getSongListId(val)
    setRankingId(val)
  }
  return (
    <RankingItemWrapper>
      <div className="main_title">{title}</div>
      {rankingList.map((rankingItem, index) => {
        return (
          <div
            className="item"
            key={rankingItem.id}
            onClick={() => handleSongListId(rankingItem.id)}
            style={
              rankingItem.id == rankingId
                ? { backgroundColor: '#e6e6e6' }
                : { backgroundColor: '#F9F9F9' }
            }
          >
            <div className="img">
              <img src={rankingItem.coverImgUrl} alt="" />
            </div>
            <div className="item_title">
              <div className="sub_title ellipsis_1">{rankingItem.name}</div>
              <div className="update_time ellipsis_1">
                {rankingItem.updateFrequency}
              </div>
            </div>
          </div>
        )
      })}
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)