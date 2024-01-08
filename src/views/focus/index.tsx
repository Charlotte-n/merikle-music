import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FocusWrapper } from '@/views/focus/style'
import FocusUnLogin from '@/views/focus/c-pages/focus-unlogin'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return (
    <FocusWrapper className={'wrap-v2'}>
      <FocusUnLogin></FocusUnLogin>
    </FocusWrapper>
  )
}

export default memo(Focus)
