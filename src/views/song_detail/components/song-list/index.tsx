import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  GetMoreContentWrapper,
  SongListHeader,
  SongListTableWrapper,
  SongListWrapper
} from '@/views/song_detail/components/song-list/style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { formatTime } from '@/utils/formate'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const SongList: FC<IProps> = () => {
  const { SongListTable, SongListDetail } = useAppSelector((state) => {
    return {
      SongListTable: state.songDetail.hotSongListTable,
      SongListDetail: state.songDetail.songDetail
    }
  }, shallowEqual)
  const navigate = useNavigate()
  const gotoLyricPage = (ids: string | number) => {
    navigate('/lyric/detail?ids=' + ids)
  }

  return (
    <SongListWrapper>
      <SongListHeader className="songlist_header">
        <div className="songlist_left">
          <h2>歌曲列表</h2>
          <span>{SongListTable?.length}首歌</span>
        </div>
        <div className="songlist_right">
          <span className="play_songcount">播放:</span>
          <div>
            <span className="count">{SongListDetail?.playCount}</span>
            <span>次</span>
          </div>
        </div>
      </SongListHeader>
      <SongListTableWrapper>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <div>歌曲标题</div>
                </th>
                <th>时长</th>
                <th>歌手</th>
                <th>专辑</th>
              </tr>
            </thead>
            <tbody>
              {SongListTable?.slice(0, 10).map((item, index) => {
                return (
                  <tr key={item.name}>
                    <td style={{ textAlign: 'center' }}>
                      <span>{index + 1}</span>
                      <span className="sprite_02 play"></span>
                    </td>
                    <td
                      className="ellipsis_1"
                      onClick={() => gotoLyricPage(item.id)}
                    >
                      {item.name}
                    </td>
                    <td>{formatTime(item.dt)}</td>
                    <td>小红</td>
                    <td
                      className="ellipsis_1"
                      style={{
                        width: '100px',
                        display: 'inline-block',
                        lineHeight: '30px',
                        overflow: 'hidden'
                      }}
                    >
                      {item.al.name}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </SongListTableWrapper>
      <GetMoreContentWrapper>
        <div className="more">查看更多内容,请下载客户端</div>
        <div className="btn">
          <button className="load_down">立即下载</button>
        </div>
      </GetMoreContentWrapper>
    </SongListWrapper>
  )
}

export default memo(SongList)
