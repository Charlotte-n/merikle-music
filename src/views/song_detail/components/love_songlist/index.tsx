import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  LoveSongListHeader,
  LoveSongListPic,
  LoveSongListWrapper
} from '@/views/song_detail/components/love_songlist/style'
import { Subscriber } from '@/views/discover/c-pages/recommend/services/types'
import { getSongList } from '@/views/player/services/player'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const LoveSongList: FC<IProps> = () => {
  const [LoveSongListUser, setLoveSongListUser] = useState<Subscriber[]>(
    [] as Subscriber[]
  )
  const [search] = useSearchParams()
  const songId = Number(search.get('id'))
  useEffect(() => {
    getSongList(songId)
      .then((res) => {
        setLoveSongListUser(res.playlist.subscribers)
      })
      .catch((error) => {
        console.log(error, '出错了')
      })

    return () => {}
  }, [])

  return (
    <LoveSongListWrapper>
      <LoveSongListHeader>喜欢这个歌单的人</LoveSongListHeader>
      <LoveSongListPic>
        {LoveSongListUser.map((item: Subscriber) => {
          return (
            <div key={item.avatarImgId} className="img">
              <img src={item.avatarUrl} alt="" />
            </div>
          )
        })}
      </LoveSongListPic>
    </LoveSongListWrapper>
  )
}

export default memo(LoveSongList)
