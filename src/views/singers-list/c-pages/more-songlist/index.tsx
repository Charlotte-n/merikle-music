import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MoreSongListWrapper } from '@/views/singers-list/c-pages/more-songlist/style'
import { ListenSongsRankingWrapper } from '@/views/singers-list/c-pages/listen-songs-ranking/style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const MoreSongList: FC<IProps> = () => {
  const { singerSongs } = useAppSelector((state) => {
    return {
      singerSongs: state.SingleSingerDetailSlice.singerSongs
    }
  })
  return (
    <MoreSongListWrapper className={'wrap-v2'}>
      <ListenSongsRankingWrapper>
        <header>
          <div className={'left'}>
            <div>听歌排行</div>
            <div>累计听歌{singerSongs.total}首</div>
          </div>
          <div className={'right'}>
            <span>最近一周</span>
            <span>所有时间</span>
          </div>
        </header>
        <main>
          <div className={'ranking'}>
            {singerSongs.songs?.slice(0, 25).map((item, index) => {
              return (
                <div className={'row'} key={item.id}>
                  <div className={'song_list'}>
                    <span
                      style={{
                        width: '20px',
                        display: 'inline-block',
                        fontSize: '18px',
                        textAlign: 'end'
                      }}
                    >
                      {index + 1}.
                    </span>
                    <span style={{ width: '40px', display: 'inline-block' }}>
                      播放
                    </span>
                    <span
                      className={'songs_name ellipsis_1'}
                      style={{ width: '100px', display: 'inline-block' }}
                    >
                      {item.name}
                    </span>
                    <span className={'singer_name'}>{item.ar[0].name}</span>
                  </div>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 add"></button>
                    <button className="btn sprite_02 fover"></button>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </ListenSongsRankingWrapper>
    </MoreSongListWrapper>
  )
}

export default memo(MoreSongList)
