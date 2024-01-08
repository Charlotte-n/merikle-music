import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from '@/views/discover/c-pages/recommend/components/ranking-item/style'
import { Playlist } from '@/views/discover/c-pages/recommend/services/types'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  rankingSong: Playlist
}

const RankingItem: FC<IProps> = (props) => {
  const { rankingSong } = props
  return (
    <RankingItemWrapper>
      {/*  图片*/}
      <div className="pic">
        <img src={rankingSong?.coverImgUrl} alt="" className="image" />
        <div className="title">
          <h4 className="main_title">{rankingSong?.name}</h4>
          <button className="btn sprite_02 play"></button>
          <button className="btn sprite_02 favor"></button>
        </div>
      </div>
      <div className="list">
        {rankingSong?.tracks.slice(0, 10).map((item, index) => {
          return (
            <Link to="" className="list_item" key={item.name}>
              <div className="content">
                <div className="index">{index + 1}</div>
                <div className="list_title">{item.name}</div>
              </div>
              <div className="operate">
                <button className="btn sprite_02 play"></button>
                <button className="btn sprite_icon2 add"></button>
                <button className="btn sprite_02 fover"></button>
              </div>
            </Link>
          )
        })}
        <div className="all">
          <Link to="\">查看全部 &gt;</Link>
        </div>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)
