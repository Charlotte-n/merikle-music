import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListDescriptionWrapper } from '@/views/song_detail/components/lyric-song/components/index'
import { Playlist } from '@/views/player/services/types'
import { formatYearTime } from '@/utils/formate'
import { Tag } from 'antd'

interface IProps {
  children?: ReactNode
  CurrentSongList: Playlist
}

const SongListDescription: FC<IProps> = (props) => {
  const { CurrentSongList } = props
  useEffect(() => {
    console.log('当前的时间为', CurrentSongList.createTime)
    console.log(CurrentSongList.tags)
    return () => {}
  }, [])

  return (
    <SongListDescriptionWrapper>
      <div className="song_title">
        <i className="sprite_icon2 playsong_list"></i>
        <span className="ellipsis_1">{CurrentSongList.name}</span>
      </div>
      <div className="song_author">
        <div className="img">
          <img src={CurrentSongList.coverImgUrl} alt="" />
        </div>
        <div className="author">{CurrentSongList.commentThreadId}</div>
        <div className="time">
          <span>{formatYearTime(CurrentSongList.createTime)}</span>
          <span>创建</span>
        </div>
      </div>
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
      <div className="song_tag">
        <div>
          <span className="tags">标签:</span>
          {CurrentSongList.tags?.map((item: string, index: number) => {
            return <Tag key={index}>{item}</Tag>
          })}
        </div>
      </div>
      <div className="song_introduction">
        <span>介绍:</span>
        <span>{CurrentSongList.description}</span>
      </div>
    </SongListDescriptionWrapper>
  )
}

export default memo(SongListDescription)
