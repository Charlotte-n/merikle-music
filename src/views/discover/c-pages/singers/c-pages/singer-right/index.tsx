import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerRightWrapper } from '@/views/discover/c-pages/singers/c-pages/singer-right/style'
import SingerRightItem from '@/views/discover/c-pages/singers/components/singer-right-item'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Artist } from '@/views/discover/c-pages/singers/services/type'
import { Simulate } from 'react-dom/test-utils'
import input = Simulate.input
import AllSinger from '@/views/discover/c-pages/singers/components/singer-all'

interface IProps {
  children?: ReactNode
  title: string[]
  Params: {
    type: number
    area: number
  }
}

const SingerRight: FC<IProps> = (props) => {
  const { title, Params } = props
  const recommend = ['推荐歌手', '入驻歌手']
  const { singerListData } = useAppSelector((state) => {
    return {
      singerListData: state.SingersSlice.SingerList
    }
  }, shallowEqualApp)
  useEffect(() => {
    return () => {}
  }, [singerListData])

  return (
    <SingerRightWrapper>
      {/*上面的部分*/}
      <SingerRightItem
        data={singerListData}
        title={title[0] === '' ? recommend : title}
        Params={Params}
      ></SingerRightItem>
      {/*  所有的歌手*/}
      {title[0] !== '入驻歌手' ? <AllSinger></AllSinger> : ''}
    </SingerRightWrapper>
  )
}

export default memo(SingerRight)
