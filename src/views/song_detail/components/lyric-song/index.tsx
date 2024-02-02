import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LyricSongWrapper } from '@/views/song_detail/components/lyric-song/style'
import { useSearchParams } from 'react-router-dom'
import { getSongDetail, getSongList } from '@/views/player/services/player'
import { Playlist } from '@/views/player/services/types'
import SongListDescription from '@/views/song_detail/components/lyric-song/components/songlist'

interface IProps {
  children?: ReactNode
}
interface CurrentSongDetail {}

const LyricSong: FC<IProps> = () => {
  //拿到路由的参数
  const [search] = useSearchParams()
  const songId = Number(search.get('id'))
  const [CurrentSongDetail, setCurrentSongDetail] = useState({})
  const [CurrentSongList, setCurrentSongList] = useState<Playlist>(
    {} as Playlist
  )
  useEffect(() => {
    getSongDetail(songId).then((res) => {
      if (res.songs.length == 0) {
        getSongList(songId).then((res) => {
          setCurrentSongList(res.playlist)
        })
      } else {
        setCurrentSongDetail(res.songs[0])
      }
    })

    return () => {}
  }, [])

  return (
    <LyricSongWrapper>
      <div className="lyric_left">
        {Object.keys(CurrentSongList).length == 0 ? (
          <img src={(CurrentSongDetail as any).al?.picUrl} alt="" />
        ) : (
          <img src={(CurrentSongList as any)?.coverImgUrl} alt="" />
        )}
      </div>
      <div className="lyric_right">
        <SongListDescription
          CurrentSongList={CurrentSongList}
        ></SongListDescription>
      </div>
    </LyricSongWrapper>
  )
}

export default memo(LyricSong)
