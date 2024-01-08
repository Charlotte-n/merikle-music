import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UnLoginWrapper } from '@/views/mine/c-pages/unlogin/style'

interface IProps {
  children?: ReactNode
}

const UnLogin: FC<IProps> = () => {
  return (
    <UnLoginWrapper>
      <div className={'img'}>
        <img src={require('@/assets/img/mine_sprite.png')} alt="" />
      </div>
    </UnLoginWrapper>
  )
}

export default memo(UnLogin)
