import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  AppPlayBar,
  BarControl,
  BarProgress,
  MusicOperation
} from '@/views/player/app-player-bar/style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatTime } from '@/utils/formate'
import {
  changeLyricIndexAction,
  changeMusicAction,
  changePlayModeAction
} from '@/views/player/store'
import { getSongUrl } from '@/views/player/services/player'

interface IProps {
  children?: ReactNode
}

const PlayBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<any>()
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  // @ts-ignore
  const dispatch = useAppDispatch()
  const { currentSong, lyricSong, lyricIndex, playMode } = useAppSelector(
    (state) => {
      return {
        currentSong: state.player.currentSong,
        lyricSong: state.player.lyricSong,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playSongMode,
        playSongIndex: state.player.playSongIndex
      }
    }
  )
  //异步设置播放源
  const handlePlayBtnClick = () => {
    console.log('播放了，查看情况的')
    //控制audio的开始和暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((error: any) => {
          console.log('播放失败的原因', error)
          setIsPlaying(false)
        })
    //设置状态
    setIsPlaying(!isPlaying)
  }
  //音乐的播放进度处理
  const handleTimeUpdate = () => {
    //接口返回来的是秒，这个歌曲播放的为s，
    //1.获取当前的播放时间
    const songCurrentTime = audioRef.current!.currentTime * 1000
    //2.计算当前歌曲进度
    if (!isSliding) {
      //把当前的时间换为ms，进行格式化
      setCurrentTime(songCurrentTime)
      //进行转化进度
      setProgress((songCurrentTime / duration) * 100)
    }
    //3.根据当前时间匹配对应的歌词
    let index = lyricSong.length - 1
    for (let i = 0; i < lyricSong.length; i++) {
      const lyric = lyricSong[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    //4. 匹配对应的歌词
    //这个步骤是性能优化方面的，当歌词保存的index和这个index一样不需要再进行保存了，index为-1也不需要派发
    if (lyricIndex == index || index == -1) return
    dispatch(changeLyricIndexAction(index))
    try {
      //5.  展示歌词
      message.config({
        top: 650
      })
      message
        .open({
          content: lyricSong[index]?.lyric,
          key: 'lyric',
          duration: 0
        })
        .then()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSliderOnChanging = (value: number) => {
    //1.当拖拽的时候，设置状态
    setIsSliding(true)
    //2.设置progress
    setProgress(value)
    //3. 获取value值将时间随着拖拽的改变而改变
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }
  const handleSliderChange = (value: number) => {
    //duration为ms,当前的时间也为s
    //1.获取当前位置的时间
    const currentime = (value / 100) * duration
    //2.设置时间
    audioRef.current!.currentTime = currentime / 1000
    //3.currentTime和Porgress
    setProgress(value)
    setCurrentTime(currentime)
    setIsSliding(false)
  }
  //处理随机，顺序，默认
  const handleMode = () => {
    let newMode = playMode + 1
    if (newMode > 2) newMode = 0
    dispatch(changePlayModeAction(newMode))
  }
  //#region切换音乐这个逻辑比较复杂准备在仓库里面写
  const handleChangeMusic = (isNext = true) => {
    console.log(isNext)
    dispatch(changeMusicAction(isNext))
  }
  //endregion

  useEffect(() => {
    //1.播放音乐
    if (Object.keys(currentSong).length !== 0) {
      const playAudio = async () => {
        await getSongUrl(currentSong?.id).then((res) => {
          if (res.data) {
            audioRef.current!.src = res.data[0].url
          }
        })
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error: any) => {
            setIsPlaying(false)
            console.log('播放失败', error)
          })
      }
      playAudio().then()
      //2.拿到总时间
      setDuration(currentSong?.dt)
    }
    return () => {}
  }, [currentSong])
  const styls = {
    rail: { backgroundColor: '#111111' },
    track: { backgroundColor: 'red' }
  }
  return (
    <AppPlayBar>
      <div className="bar">
        <div className="control wrap-v2">
          <BarControl isplaying={isPlaying ? true : undefined}>
            <button
              className="pre sprite_playbar"
              onClick={() => handleChangeMusic(false)}
            ></button>
            <button
              className="play sprite_playbar"
              onClick={handlePlayBtnClick}
            ></button>
            <button
              className="next sprite_playbar"
              onClick={() => handleChangeMusic()}
            ></button>
          </BarControl>
          <BarProgress>
            <Link to="/">
              <img src={currentSong?.al?.picUrl} alt="" />
            </Link>

            <div className="bar_slider">
              <Slider
                step={0.5}
                value={progress}
                style={{ width: '500px' }}
                tooltip={{ formatter: null }}
                onChange={handleSliderOnChanging}
                onAfterChange={handleSliderChange}
                styles={styls}
              />
              <div className="play_time">
                <span>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </BarProgress>
          <MusicOperation playmode={playMode}>
            <div className="left">
              <button className="pip"></button>
              <button className="sprite_playbar add"></button>
              <button className="sprite_playbar share"></button>
            </div>
            <div className="right sprite_playbar">
              <button className="btn sprite_playbar first"></button>
              <button
                className="btn sprite_playbar second"
                onClick={handleMode}
              ></button>
              <button className="btn sprite_playbar playlist"></button>
            </div>
          </MusicOperation>
        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}></audio>
    </AppPlayBar>
  )
}

export default memo(PlayBar)
