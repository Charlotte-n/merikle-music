import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DjRankingItemWrapper } from '@/views/discover/c-pages/djradio/c-components/dj-ranking-item/style'

interface IProps {
  children?: ReactNode
  rankingItem: any
}

const DjRankingItem: FC<IProps> = (props) => {
  const { rankingItem } = props
  return (
    <DjRankingItemWrapper>
      <div className={'img'}>
        <img src={rankingItem?.picUrl} alt="" />
      </div>
      <div className={'title'}>
        <div className={'main_title'}>{rankingItem.name}</div>
        <div className={'writer'}>
          <div>{rankingItem.dj.nickname}</div>
        </div>
        <div className={'total'}>
          <span style={{ marginRight: '10px' }}>
            共{rankingItem.programCount}期
          </span>
          <span>订阅{rankingItem.subCount}次</span>
        </div>
      </div>
    </DjRankingItemWrapper>
  )
}

export default memo(DjRankingItem)
