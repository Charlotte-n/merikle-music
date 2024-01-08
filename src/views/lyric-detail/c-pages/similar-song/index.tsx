import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SimilarSongWrapper } from '@/views/lyric-detail/c-pages/similar-song/style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const SimilarSong: FC<IProps> = () => {
  const { similarSong } = useAppSelector((state) => {
    return {
      similarSong: state.LyricDetailSlice.similarSong
    }
  }, shallowEqualApp)
  return (
    <SimilarSongWrapper>
      <header>相似的歌曲</header>
      <main>
        {similarSong?.map((item) => {
          return (
            <div key={item.id} className={'song_item'}>
              <div className={'left'}>
                <div className={'song_name ellipsis_1'}>{item.name}</div>
                <div className={'singer ellipsis_1'}>
                  {item.artists[0].name}
                </div>
              </div>
              <div className={'right'}>
                <div className={'sprite_icon3 play'}></div>
                <div className={'sprite_icon3 add'}></div>
              </div>
            </div>
          )
        })}
      </main>
    </SimilarSongWrapper>
  )
}

export default memo(SimilarSong)
