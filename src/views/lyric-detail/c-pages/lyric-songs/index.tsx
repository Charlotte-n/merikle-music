import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LyricSongsWrapper } from '@/views/lyric-detail/c-pages/lyric-songs/style'
import { useAppDispatch, useAppSelector } from '@/store'
import lyricSong from '@/views/song_detail/components/lyric-song'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import Operation from '@/components/operation/operation'
import { fetchCurrentSongAction } from '@/views/player/store'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const LyricSongs: FC<IProps> = () => {
  const [showStatus, setShowStatus] = useState(false)
  const [search] = useSearchParams()
  const id = search.get('ids') as string
  const { LyricSongsDetail, LyricSong } = useAppSelector((state) => {
    return {
      LyricSongsDetail: state.LyricDetailSlice.LyricDetail,
      LyricSong: state.LyricDetailSlice.LyricSong
    }
  })
  const handleShow = () => {
    setShowStatus(!showStatus)
  }
  const song = LyricSongsDetail ? LyricSongsDetail[0] : LyricSongsDetail

  return (
    <LyricSongsWrapper showStatus={showStatus}>
      <div className={'left'}>
        <div className={'img'}>
          <img src={song?.al.picUrl} alt="" />
        </div>
      </div>
      <div className={'right'}>
        <div className={'title'}>
          <span className={'sprite_icon2 single_song'}></span>
          <div className={'middle'}>
            <span className={'first'}>{song?.name}</span>
            <span className={'second'}>{song?.alia[0]}</span>
          </div>
          <span className={'mv sprite_icon2'}></span>
        </div>
        <div className={'source'}>
          <div>
            <dl>歌手:</dl>
            <dt>{song?.ar[0]?.name}</dt>
          </div>
          <div>
            <dl>所属专辑:</dl>
            <dt>{song?.al.name}</dt>
          </div>
        </div>
        <Operation type="song" id={id}></Operation>
        <div className={['lyric', showStatus ? 'active' : null].join(' ')}>
          {LyricSong}
        </div>
        {showStatus ? (
          <span className={'close'} onClick={handleShow}>
            收起
            <UpOutlined />
          </span>
        ) : (
          <span
            style={{ paddingLeft: '0px' }}
            className={'show'}
            onClick={handleShow}
          >
            展开
            <DownOutlined />
          </span>
        )}
      </div>
    </LyricSongsWrapper>
  )
}

export default memo(LyricSongs)
