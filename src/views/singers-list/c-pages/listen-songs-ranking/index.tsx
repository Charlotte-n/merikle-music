import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ListenSongsRankingWrapper } from '@/views/singers-list/c-pages/listen-songs-ranking/style'
import { useAppSelector } from '@/store'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const ListenSongsRanking: FC<IProps> = () => {
  const navigate = useNavigate()
  const handleGoMoreSong = () => {
    navigate('/more/singerlist')
  }
  const handleGotoSingerDetail = (id: string | number) => {
    navigate(`/singer/detail?id=${id}`)
  }
  const { singerSongs } = useAppSelector((state) => {
    return {
      singerSongs: state.SingleSingerDetailSlice.singerSongs
    }
  })
  return (
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
          {singerSongs.songs?.slice(0, 10).map((item, index) => {
            return (
              <div className={'row'} key={item.id}>
                <div className={'song_list'}>
                  <span style={{ width: '20px', display: 'inline-block' }}>
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
                  <span
                    className={'singer_name'}
                    onClick={() => handleGotoSingerDetail(item.id)}
                  >
                    {item.ar[0].name}
                  </span>
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
      <div className={'more'} onClick={handleGoMoreSong}>
        查看更多&gt;
      </div>
    </ListenSongsRankingWrapper>
  )
}

export default memo(ListenSongsRanking)
