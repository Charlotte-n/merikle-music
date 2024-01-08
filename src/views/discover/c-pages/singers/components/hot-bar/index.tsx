import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HotBarWrapper } from '@/views/discover/c-pages/singers/components/hot-bar/style'
import { Letters } from '@/views/discover/c-pages/singers/config'
import { useAppDispatch } from '@/store'
import {
  fetchSingerByLetterAction,
  fetchSingerListAction
} from '@/views/discover/c-pages/singers/store'

interface IProps {
  children?: ReactNode
  Params: {
    type: number
    area: number
  }
}

const HotBar: FC<IProps> = (props) => {
  const { Params } = props
  const [Index, setIndex] = useState(0)
  //点击的时候就刷新数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  const handleChange = (item: string, index: number) => {
    //动态控制样式
    setIndex(index)
    if (item === '热门') {
      dispatch(
        fetchSingerListAction({
          type: -1,
          area: -1,
          limit: 10
        })
      )
    } else {
      dispatch(
        fetchSingerByLetterAction({ ...Params, limit: 10, initial: item })
      )
    }
  }
  return (
    <HotBarWrapper>
      {Letters.map((item, index) => {
        return (
          <span
            key={index}
            className={`${index === Index ? 'active' : ''} letter`}
            onClick={() => handleChange(item, index)}
          >
            {item}
          </span>
        )
      })}
    </HotBarWrapper>
  )
}

export default memo(HotBar)
