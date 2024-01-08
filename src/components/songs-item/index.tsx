import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsMenuWrapper } from '@/components/songs-item/style'
import { singleHotRecommendSong } from '@/views/discover/c-pages/recommend/services/types'
import { formateCount } from '@/utils/formate'
import { useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
  hotRecommendSong?: singleHotRecommendSong
  albumsSongList?: any
}

const SongsItem: FC<IProps> = (props: any) => {
  const { hotRecommendSong, albumsSongList } = props
  const navigate = useNavigate()
  const src = albumsSongList
    ? albumsSongList.coverImgUrl
    : hotRecommendSong.picUrl
  const playCount = albumsSongList
    ? albumsSongList.playCount
    : hotRecommendSong.playCount
  const name = albumsSongList ? albumsSongList.name : hotRecommendSong.name
  const id = albumsSongList ? albumsSongList.id : hotRecommendSong.id
  const handleGoSongDetail = () => {
    navigate(`/song?id=${id}`)
  }
  useEffect(() => {}, [])

  return (
    <SongsMenuWrapper>
      <div className="song_content">
        <div className="img">
          <img src={src} alt="" onClick={handleGoSongDetail} />
          <div className="mask">
            <span className="number">
              <i className="sprite_icon erji"></i>
              {formateCount(playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
        <div className="title" onClick={handleGoSongDetail}>
          {name}
        </div>
      </div>
    </SongsMenuWrapper>
  )
}

export default memo(SongsItem)
