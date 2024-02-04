import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  Pannel,
  PlayListWrapper
} from '@/views/player/app-player-bar/PlayList/style'
import SongItem from '@/views/player/app-player-bar/components/song-item/song'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { fetchCurrentSongAction } from '@/views/player/store'
import { fetchLyricDetailAction } from '@/views/lyric-detail/store'
import { transformArray } from '@/utils/parse-lyric'

interface IProps {
  children?: any
}

const PlayList: FC<IProps> = ({ children }) => {
  const { close } = children
  const { SongList, currentSong, LyricSong, currentLyricIndex } =
    useAppSelector((state) => {
      return {
        SongList: state.player.playSongList,
        currentSong: state.player.currentSong,
        LyricSong: state.LyricDetailSlice.LyricSong,
        currentLyricIndex: state.player.lyricIndex
      }
    }, shallowEqual)
  const [lyric, setLyric] = useState([''])
  //@ts-ignore
  const dispatch = useAppDispatch()
  const getCurrentSong = (value: any) => {
    console.log('当前的歌曲为', value)
    dispatch(fetchCurrentSongAction(value.id))
  }
  //操作歌词随着歌曲来动
  const li: any = document.querySelector('.active')
  const ul: any = document.querySelector('ul.lyric')
  useEffect(() => {
    if (li) {
      if (li.offsetTop < 132) {
        ul.style.transform = ` translate3d(0px, 0%, 0px)`
        ul.style.transition = `transform 1s ease 0s`
      } else {
        ul!.style.transform = `translate3d(0px, ${
          (-1 * li.dataset.id + 3) * 40
        }px, 0px)`
        ul!.style.transition = `transform 1s ease 0s`
      }
    }
  }, [li])
  useEffect(() => {
    //   获取歌词
    dispatch(fetchLyricDetailAction(currentSong.id))
  }, [currentSong])

  useEffect(() => {
    //将歌词分成一个数组
    setLyric(transformArray(LyricSong))
    console.log(lyric)
  }, [LyricSong, currentSong])
  return (
    <PlayListWrapper>
      <div className="playpanel_bg header">
        <div className="left">
          <h4>播放列表</h4>
          <div className="icon">
            <i className="icon_collect">
              <span className="collect sprite_playlist"></span>
            </i>
            <span className="line"></span>
            <i className="icon_delete">
              <span className="delete sprite_playlist"></span>
            </i>
          </div>
        </div>
        <div className="right">
          <h4>{currentSong.al.name}</h4>
          <i className="icon_close" onClick={() => close()}>
            <span className="close sprite_playlist"></span>
          </i>
        </div>
      </div>
      <Pannel background={currentSong.al.picUrl}>
        <div className="mask"></div>
        <div className="playpanel_bg bg">
          <div className="left">
            {/*  展示歌单*/}
            <ul>
              {SongList.map((item, index) => {
                return (
                  <li key={item.id + index} style={{ position: 'relative' }}>
                    <SongItem
                      ItemDetail={item}
                      getCurrentSong={getCurrentSong}
                    ></SongItem>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="line"></div>
          <div className="right">
            <ul className={'lyric'}>
              {lyric.map((item, index) => {
                return (
                  <li
                    key={item + index}
                    className={index === currentLyricIndex ? 'active' : ''}
                    data-id={index}
                    style={{
                      height: '40px'
                    }}
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Pannel>
    </PlayListWrapper>
  )
}

export default memo(PlayList)
