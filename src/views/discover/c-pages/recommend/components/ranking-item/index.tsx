import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from '@/views/discover/c-pages/recommend/components/ranking-item/style'
import { Playlist } from '@/views/discover/c-pages/recommend/services/types'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import {
  changeCurrentSongAction,
  fetchCurrentSongAction
} from '@/views/player/store'

interface IProps {
  children?: ReactNode
  rankingSong: Playlist
}

const RankingItem: FC<IProps> = (props) => {
  const { rankingSong } = props
  const navigate = useNavigate()
  //@ts-ignore
  const dispatch = useAppDispatch()
  const gotoLyricPage = (ids: string | number) => {
    navigate('/lyric/detail?ids=' + ids)
  }
  //跳转到歌单相应的页面
  const gotoSongListPage = (id: number) => {
    navigate('/discover/ranking?id=' + id)
  }
  const addCurrentSong = (id: string) => {
    dispatch(fetchCurrentSongAction(id))
  }
  return (
    <RankingItemWrapper>
      {/*  图片*/}
      <div className="pic-recommend">
        <img
          src={rankingSong?.coverImgUrl}
          alt=""
          className="image"
          onClick={() => gotoSongListPage(rankingSong.id)}
        />
        <div className="title">
          <h4
            className="main_title"
            onClick={() => gotoSongListPage(rankingSong.id)}
          >
            {rankingSong?.name}
          </h4>
          <button className="btn sprite_02 play"></button>
          <button className="btn sprite_02 favor"></button>
        </div>
      </div>
      <div className="list">
        {rankingSong?.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list_item" key={index}>
              <div className="content">
                <div className="index">{index + 1}</div>
                <div
                  className="list_title"
                  onClick={() => gotoLyricPage(item.id)}
                >
                  {item.name}
                </div>
              </div>
              <div className="operate">
                <button
                  className="btn sprite_02 play"
                  onClick={() => addCurrentSong(String(item.id))}
                ></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 fover"></button>
              </div>
            </div>
          )
        })}
        <div className="all">
          <span onClick={() => gotoSongListPage(rankingSong.id)}>
            查看全部 &gt;
          </span>
        </div>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)
