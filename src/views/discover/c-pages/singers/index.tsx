import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from '@/views/discover/c-pages/singers/style'
import SingerLeft from '@/views/discover/c-pages/singers/c-pages/singer-left'
import SingerRight from '@/views/discover/c-pages/singers/c-pages/singer-right'
import { useAppDispatch } from '@/store'
import {
  fetchAllSingersAction,
  fetchSingerListAction
} from '@/views/discover/c-pages/singers/store'

interface IProps {
  children?: ReactNode
}

const Singers: FC<IProps> = () => {
  // @ts-ignore
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState([''])
  const Params = useRef({
    type: -1,
    area: 1
  })

  const getRightTitle = (title: string[]) => {
    setTitle(title)
  }
  //获取歌曲类型
  interface singerParamType {
    type: number
    area: number
  }
  const getSingersParam = (params: singerParamType) => {
    Params.current = params
  }
  useEffect(() => {
    dispatch(
      fetchSingerListAction({
        type: -1,
        area: -1,
        limit: 10
      })
    )
    dispatch(
      fetchAllSingersAction({
        type: -1,
        area: -1,
        limit: 50
      })
    )
    return () => {}
  }, [])

  return (
    <SingerWrapper className="wrap-v2">
      <SingerLeft
        getRightTitle={getRightTitle}
        getSingersParam={getSingersParam}
      ></SingerLeft>
      <SingerRight title={title} Params={Params.current}></SingerRight>
    </SingerWrapper>
  )
}

export default memo(Singers)
