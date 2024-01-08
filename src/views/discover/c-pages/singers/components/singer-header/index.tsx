import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerHeaderWrapper } from '@/views/discover/c-pages/singers/components/singer-header/style'

interface IProps {
  children?: ReactNode
  title: string
  subTitle?: string
}

const Discover: FC<IProps> = (props) => {
  const { title, subTitle } = props
  return (
    <SingerHeaderWrapper>
      <div className="content">
        <h2>{title}</h2>
      </div>
    </SingerHeaderWrapper>
  )
}

export default memo(Discover)
