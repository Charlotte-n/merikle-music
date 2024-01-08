import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CreateSongListWrapper } from '@/views/singers-list/c-pages/create-songlist/style'

interface IProps {
  children?: ReactNode
}

const CreateSongList: FC<IProps> = () => {
  return (
    <CreateSongListWrapper>
      <header>张惠妹aMEI创建的歌单(3)</header>
      <main></main>
    </CreateSongListWrapper>
  )
}

export default memo(CreateSongList)
