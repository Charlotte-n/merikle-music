import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsMenuWrapper } from '@/components/songs-item/style'
import { singleHotRecommendSong } from '@/views/discover/c-pages/recommend/services/types'
import { formateCount } from '@/utils/formate'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import {
  changeImageLoading,
  changeLoading
} from '@/views/discover/c-pages/recommend/store'
import { Spin } from 'antd'
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
  const { ImgLoading } = useAppSelector((state) => {
    return {
      ImgLoading: state.recommend.imageLoading
    }
  }, shallowEqual)
  const dispatch = useAppDispatch()
  const handleImageLoad = () => {
    dispatch(changeImageLoading(false))
  }
  useEffect(() => {}, [])

  return (
    <Spin spinning={ImgLoading}>
      <SongsMenuWrapper>
        <div className="song_content">
          <div className="img">
            <img
              src={src}
              alt=""
              onClick={handleGoSongDetail}
              onLoad={handleImageLoad}
            />

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
    </Spin>
  )
}

export default memo(SongsItem)
