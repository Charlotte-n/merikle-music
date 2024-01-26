import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { OperationWrapper } from '@/components/operation/styled'

interface IProps {
  children?: ReactNode
}

const Operation: FC<IProps> = () => {
  return (
    <OperationWrapper>
      <div className="play">
        <i className="sprite_button play1">
          <span className="play_title">播放</span>
        </i>
        <i className="sprite_playbar play2"></i>
        <i className="sprite_button play3"></i>
      </div>
      <div className="sprite_button2 collect"></div>
      <div className="sprite_button2 share"></div>
      <div className="sprite_button2 download"></div>
      <div className="sprite_button2 discuss"></div>
    </OperationWrapper>
  )
}

export default memo(Operation)
