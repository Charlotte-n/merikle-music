import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerListWrapper } from '@/views/singers-list/style'
import SingerDescribe from '@/views/singers-list/c-pages/singer-desc'
import ListenSongsRanking from '@/views/singers-list/c-pages/listen-songs-ranking'
import CreateSongList from '@/views/singers-list/c-pages/create-songlist'
import { useAppDispatch } from '@/store'
import { fetchSingleSingerDetail } from '@/views/singers-list/store'
import { useSearchParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const SingersListPage: FC<IProps> = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchSingleSingerDetail(id!))
    return () => {}
  }, [])

  return (
    <SingerListWrapper>
      <div>
        <div
          className={'wrap-v2'}
          style={{ backgroundColor: 'white', padding: '10px 50px' }}
        >
          <SingerDescribe></SingerDescribe>
          <ListenSongsRanking></ListenSongsRanking>
        </div>
      </div>
    </SingerListWrapper>
  )
}

export default memo(SingersListPage)
