import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderW2Wrapper } from '@/components/app-header-w2/style'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeaderW2: FC<IProps> = (props) => {
  const navigation = useNavigate()
  const handlegoToSingers = () => {
    navigation('/discover/singers')
  }
  return (
    <HeaderW2Wrapper>
      <div className="content">
        <h2>入驻歌手</h2>
        <div onClick={handlegoToSingers}>查看全部 &gt;</div>
      </div>
    </HeaderW2Wrapper>
  )
}

export default memo(AppHeaderW2)
