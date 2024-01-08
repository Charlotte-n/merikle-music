import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  HotSongListContent,
  HotSongListHeader,
  HotSongListWrapper
} from '@/views/song_detail/components/hot-songlist/style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const HotSongList: FC<IProps> = () => {
  const { hotSongList } = useAppSelector((state) => {
    return {
      hotSongList: state.songDetail.hotSongList
    }
  }, shallowEqual)

  return (
    <HotSongListWrapper>
      <HotSongListHeader>热门歌单</HotSongListHeader>
      <HotSongListContent>
        {hotSongList.map((item, index) => {
          if (hotSongList.length != 0) {
            return (
              <div key={index} className="hotSongItem">
                <div className="pic">
                  <img src={item.picUrl} alt="" />
                </div>
                <div className="name">
                  <div className="title ellipsis_1">{item.name}</div>
                </div>
              </div>
            )
          }
        })}
      </HotSongListContent>
    </HotSongListWrapper>
  )
}

export default memo(HotSongList)
