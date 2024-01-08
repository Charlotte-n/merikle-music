import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FocusUnloginWrapper } from '@/views/focus/c-pages/focus-unlogin/style'

interface IProps {
  children?: ReactNode
}

const FocusUnLogin: FC<IProps> = () => {
  return (
    <FocusUnloginWrapper>
      <div className={'img'}>
        <img src={require('@/assets/img/friend_sprite.jpg')} alt="" />
      </div>
    </FocusUnloginWrapper>
  )
}

export default memo(FocusUnLogin)
