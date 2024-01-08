import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerDetailWrapper } from '@/views/singer-detail/style'
import NavBar from '@/views/discover/nav-bar'

interface IProps {
  children?: ReactNode
}

const SingerDetail: FC<IProps> = () => {
  return (
    <div>
      <NavBar></NavBar>
      <SingerDetailWrapper className={'wrap-v2'}></SingerDetailWrapper>
    </div>
  )
}

export default memo(SingerDetail)
