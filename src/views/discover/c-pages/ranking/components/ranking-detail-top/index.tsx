import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  OperationWrapper,
  RankingDetailTopWrapper
} from '@/views/discover/c-pages/ranking/components/ranking-detail-top/style'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatYearTime } from '@/utils/formate'
import { Spin } from 'antd'
import { shallowEqual } from 'react-redux'
import { changeImageLoading } from '@/views/song_detail/store'

interface IProps {
  children?: ReactNode
}

const RankingDetailTop: FC<IProps> = () => {
  const { rankingDetail, loading } = useAppSelector((state) => {
    return {
      rankingDetail: state.songDetail.songDetail,
      loading: state.songDetail.imageLoading
    }
  }, shallowEqual)
  const dispatch = useAppDispatch()
  const handleLoad = () => {
    console.log('加载完成')
    dispatch(changeImageLoading(false))
  }
  return (
    <RankingDetailTopWrapper>
      <Spin spinning={loading}>
        <div className="img">
          <img src={rankingDetail.coverImgUrl} onLoad={handleLoad} alt="" />
        </div>
      </Spin>

      <div className="ranking_detail_right">
        <div className="title">{rankingDetail.name}</div>
        <div className="update_time">
          最近更新:{formatYearTime(rankingDetail.updateTime)}
        </div>
        <OperationWrapper>
          <div className="song_operate">
            <div className="play">
              <i className="sprite_button play1">
                <span className="play_title">播放</span>
              </i>
              <i className="sprite_playbar play2"></i>
              <i className="sprite_button play3"></i>
            </div>
            <div className="sprite_button2 collect"></div>
            <div className="sprite_button2 share"></div>
            <div className="sprite_button2 download"></div>
            <div className="sprite_button2 discuss"></div>
          </div>
        </OperationWrapper>
      </div>
    </RankingDetailTopWrapper>
  )
}

export default memo(RankingDetailTop)
