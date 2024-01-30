import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { OperationWrapper } from '@/components/operation/styled'
import {
  fetchCurrentSongAction,
  fetchCurrentSongBySongListOrAlbum
} from '@/views/player/store'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
  type: string
  id: string
}

const Operation: FC<IProps> = ({ type, id }) => {
  //@ts-ignore
  const dispatch = useAppDispatch()
  const play = () => {
    //这里要分情况(1.当前歌曲的播放 2.专辑或者歌单，将所有歌曲进行加入到歌单里面(还有一个加入到歌单的方法))
    switch (type) {
      case 'songList':
      case 'album':
        dispatch(fetchCurrentSongBySongListOrAlbum({ id, type }))
        break
      case 'song':
        dispatch(fetchCurrentSongAction(id))
    }
  }
  return (
    <OperationWrapper>
      <div className="play">
        <i className="sprite_button play1" onClick={() => play()}>
          <span className="play_title">播放</span>
        </i>
        <i className="sprite_playbar play2"></i>
        <i className="sprite_button play3"></i>
      </div>
      <div className="sprite_button2 collect">
        <i className="sprite_table collect-btn"></i>
        <span className="title">收藏</span>
      </div>
      <div className="sprite_button2 share">
        <i className="sprite_table share-btn"></i>
        <span className="title">分享</span>
      </div>
      <div className="sprite_button2 download">
        <i className="sprite_table download-btn"></i>
        <span className="title">下载</span>
      </div>
      <div className="sprite_button2 discuss">
        <i className="sprite_icon2 comment-btn"></i>
        <span className="title">评论</span>
      </div>
    </OperationWrapper>
  )
}

export default memo(Operation)
