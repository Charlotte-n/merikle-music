import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AllSingerWrapper } from '@/views/discover/c-pages/singers/components/singer-all/style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const AllSinger: FC<IProps> = () => {
  const { AllSingers } = useAppSelector((state) => {
    return {
      AllSingers: state.SingersSlice.AllSingers
    }
  })
  return (
    <AllSingerWrapper>
      {AllSingers?.map((item) => {
        return (
          <div key={item.id} className="singers_name">
            {item.name}
          </div>
        )
      })}
    </AllSingerWrapper>
  )
}

export default memo(AllSinger)
