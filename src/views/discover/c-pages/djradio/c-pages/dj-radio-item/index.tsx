import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { DjRadioContentWrapper } from '@/views/discover/c-pages/djradio/c-pages/dj-radio-item/style'
import DjRadioItem from '@/views/discover/c-pages/djradio/c-pages/dj-radio-item/index'
import DjHomeItem from '@/views/discover/c-pages/djradio/c-components/dj-home-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const DjRadioContent: FC<IProps> = () => {
  //将数据根据categories进行分类
  const { DjHomeList } = useAppSelector((state) => {
    return {
      DjHomeList: state.DjRadioSlice.DjHomeList
    }
  }, shallowEqualApp)
  useEffect(() => {
    console.log('我是djhome列表', DjHomeList)
  })
  return (
    <DjRadioContentWrapper>
      {DjHomeList?.map((item: any, index: number) => {
        return (
          <div key={index} className={'radio_item'}>
            <DjHomeItem categoryItem={item}></DjHomeItem>
          </div>
        )
      })}
    </DjRadioContentWrapper>
  )
}

export default memo(DjRadioContent)
