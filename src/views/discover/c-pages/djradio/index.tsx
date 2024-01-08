import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { DjRadioWrapper } from '@/views/discover/c-pages/djradio/style'
import { useAppDispatch } from '@/store'
import {
  fetchDjCategoryAction,
  fetchDjContentItemAction,
  fetchHomeListAction
} from '@/views/discover/c-pages/djradio/store'
import DjRadioCategory from '@/views/discover/c-pages/djradio/c-pages/dj-category'
import RecommendRadio from '@/views/discover/c-pages/djradio/c-pages/recommend-radio'
import DjRadioContent from '@/views/discover/c-pages/djradio/c-pages/dj-radio-item'
import { useSearchParams } from 'react-router-dom'
import DjOtherPage from '@/views/discover/c-pages/djradio/c-pages/dj-otherpage'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  //获取路由参数
  const [params] = useSearchParams()
  const type = params?.get('id')
  // @ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDjCategoryAction())
    dispatch(fetchHomeListAction())
    console.log(type)
    return () => {}
  }, [type])

  return (
    <DjRadioWrapper className={'wrap-v2'}>
      <div className={'category'}>
        <DjRadioCategory></DjRadioCategory>
      </div>
      {!type ? (
        <div>
          <RecommendRadio></RecommendRadio>
          <DjRadioContent></DjRadioContent>
        </div>
      ) : (
        <DjOtherPage></DjOtherPage>
      )}
    </DjRadioWrapper>
  )
}

export default memo(Djradio)
