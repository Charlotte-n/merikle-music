import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SimilarPlayListWrapper } from '@/views/lyric-detail/c-pages/similar-playlist/style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const SimilarPlayList: FC<IProps> = () => {
  const { similarPlayList } = useAppSelector((state) => {
    return {
      similarPlayList: state.LyricDetailSlice.similarPlayList
    }
  }, shallowEqualApp)
  return (
    <SimilarPlayListWrapper>
      <header>包含这首歌的歌单</header>
      <main>
        {similarPlayList?.map((item) => {
          return (
            <div className={'playlist_item'} key={item.id}>
              <div className={'img'}>
                <img src={item.coverImgUrl} alt="" />
              </div>
              <div className={'title'}>
                <div className={'playlist_title ellipsis_1'}>{item.name}</div>
                <div className={'author ellipsis_1'}>
                  <span>by</span>
                  {item.creator.nickname}
                </div>
              </div>
            </div>
          )
        })}
      </main>
    </SimilarPlayListWrapper>
  )
}

export default memo(SimilarPlayList)
