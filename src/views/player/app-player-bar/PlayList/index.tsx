import { FC } from 'react'
import React, { memo, useEffect, useRef, useState } from 'react'
import {
  Pannel,
  PlayListWrapper
} from '@/views/player/app-player-bar/PlayList/style'
import SongItem from '@/views/player/app-player-bar/components/song-item/song'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { clearAll, fetchCurrentSongAction } from '@/views/player/store'
import { fetchLyricDetailAction } from '@/views/lyric-detail/store'
import { transformArray } from '@/utils/parse-lyric'
import songList from '@/views/song_detail/components/song-list'

interface IProps {
  children?: any
}

const PlayList: FC<IProps> = ({ children }) => {
  const { close } = children
  const {
    SongList,
    currentSong,
    LyricSong,
    currentLyricIndex,
    LyricSongArray
  } = useAppSelector((state) => {
    return {
      SongList: state.player.playSongList,
      currentSong: state.player.currentSong,
      LyricSong: state.LyricDetailSlice.LyricSong,
      currentLyricIndex: state.player.lyricIndex,
      LyricSongArray: state.LyricDetailSlice.LyricSongArray
    }
  }, shallowEqual)
  const [lyric, setLyric] = useState([''])
  const [length, setLength] = useState(0)
  //@ts-ignore
  const dispatch = useAppDispatch()
  const getCurrentSong = (value: any) => {
    dispatch(fetchCurrentSongAction(value.id))
  }
  //操作歌词随着歌曲来动
  const li: any = document.querySelector('.active')
  const ul: any = useRef<HTMLUListElement>()
  const pannel = useRef<any>()
  useEffect(() => {
    const { length } = LyricSongArray
    setLength(length)
  }, [currentSong])
  useEffect(() => {
    //获取长度
    if (li && ul.current) {
      if (li.offsetTop < 132) {
        ul.current.style.transform = ` translate3d(0px, 0%, 0px)`
        ul.current.style.transition = `transform 1s ease 0s`
      } else {
        ul.current.style.transform = `translate3d(0px, ${
          (-1 * li.dataset.id + 3) * 40
        }px, 0px)`
        ul.current.style.transition = `transform 1s ease 0s`
        // 向上移动监听这个是否滚动
        // 获取音频当前播放时间相对于总时长的百分比
        const progressPercentage =
          (document.querySelector('.bg .right')!.clientHeight /
            LyricSongArray.length) *
          100

        // 计算滚动条可滚动的总高度的百分比
        const scrollHeight =
          (ul.current.scrollHeight - ul.current.clientHeight) / 100

        // 根据音频播放进度和滚动条可滚动的高度，计算应该滚动到的位置
        // 将滚动条滚动到计算得到的位置
        ul.scrollTop = progressPercentage * scrollHeight
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
  }, [LyricSong, currentSong])
  // @ts-ignore
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
            <i className="icon_delete" onClick={() => dispatch(clearAll())}>
              <span className="delete sprite_playlist"></span>
            </i>
          </div>
        </div>
        <div className="right">
          <h4>{currentSong.al?.name}</h4>
          <i className="icon_close" onClick={() => close()}>
            <span className="close sprite_playlist"></span>
          </i>
        </div>
      </div>
      {SongList.length > 0 ? (
        <Pannel
          ref={pannel}
          background={currentSong.al.picUrl}
          style={{
            backgroundSize: '980px',
            width: '980px',
            margin: 0,
            overflow: 'hidden'
          }}
        >
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
              <ul className={'lyric_ul'} ref={ul}>
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
              <div className={'scroll_bar'}></div>
            </div>
          </div>
        </Pannel>
      ) : (
        <div
          style={{
            height: '300px',
            backgroundColor: '#2E2D2D',
            width: '983px'
          }}
        ></div>
      )}
      )
    </PlayListWrapper>
  )
}

export default memo(PlayList)
