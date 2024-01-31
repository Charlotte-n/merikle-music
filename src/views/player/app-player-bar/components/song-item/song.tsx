import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongItemWrapper } from '@/views/player/app-player-bar/components/song-item/style'

interface IProps {
  children?: ReactNode
  ItemDetail: any
  getCurrentSong: (value: any) => void
}

const SongItem: FC<IProps> = ({ ItemDetail, getCurrentSong }) => {
  return (
    <SongItemWrapper onClick={() => getCurrentSong(ItemDetail)}>
      <div className="song_item_left">{ItemDetail.al.name}</div>
      <div className="operate">
        <i className="collect sprite_playlist icon"></i>
        <i className="share sprite_playlist icon"></i>
        <i className="download sprite_playlist icon"></i>
        <i className="delete sprite_playlist icon"></i>
      </div>
      <div className="song_item_right">
        <span>{ItemDetail.ar[0].name}</span>
        <span>02:20</span>
        <span>链接</span>
      </div>
    </SongItemWrapper>
  )
}

export default memo(SongItem)
