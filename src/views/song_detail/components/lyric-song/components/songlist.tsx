import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListDescriptionWrapper } from '@/views/song_detail/components/lyric-song/components/index'
import { Playlist } from '@/views/player/services/types'
import { formatYearTime } from '@/utils/formate'
import { Tag } from 'antd'
import Operation from '@/components/operation/operation'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  CurrentSongList: Playlist
}

const SongListDescription: FC<IProps> = (props) => {
  const [search] = useSearchParams()
  const id = search.get('id') as string
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
      <Operation type="songList" id={id}></Operation>
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
