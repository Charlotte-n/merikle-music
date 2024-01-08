import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MainWrapper } from '@/views/mine/style'
import Unlogin from '@/views/mine/c-pages/unlogin'

interface IProps {
  children?: ReactNode
}

const Main: FC<IProps> = () => {
  return (
    <MainWrapper className={'wrap-v2'}>
      {/*  没有登录的页面*/}
      <Unlogin></Unlogin>
    </MainWrapper>
  )
}

export default memo(Main)
