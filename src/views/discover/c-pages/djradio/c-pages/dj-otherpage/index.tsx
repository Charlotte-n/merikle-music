import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  DjOtherPageWrapper,
  PagiationWrapper
} from '@/views/discover/c-pages/djradio/c-pages/dj-otherpage/style'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchDjRankingAction,
  fetchGoodDjAction
} from '@/views/discover/c-pages/djradio/store'
import { Pagination } from 'antd'
import DjRankingItem from '@/views/discover/c-pages/djradio/c-components/dj-ranking-item'

interface IProps {
  children?: ReactNode
}

const list = [1, 2, 3, 4]
const DjOtherPage: FC<IProps> = () => {
  const [params] = useSearchParams()
  const id = params.get('id')
  const [pageIndex, setPageIndex] = useState(1)
  const { goodDj, DjRanking } = useAppSelector((state) => {
    return {
      goodDj: state.DjRadioSlice.goodDj,
      DjRanking: state.DjRadioSlice.DjRanking
    }
  })
  //获取数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchGoodDjAction(id!))
    dispatch(fetchDjRankingAction({ limit: 14, offset: 0, cateId: id! }))
    return () => {}
  }, [id])
  const handlePageSizeIndex = (index: number) => {
    setPageIndex(index)
    dispatch(
      fetchDjRankingAction({ limit: 14, offset: (index - 1) * 14, cateId: id! })
    )
  }
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <DjOtherPageWrapper>
      <div className={'good_dj'}>
        <header>优秀新电台</header>
        <main>
          {goodDj?.slice(0, 5).map((item) => {
            return (
              <div className={'item'} key={item}>
                <div className={'img'}>
                  <img src={item.picUrl} alt="" />
                </div>
                <div className={'title'}>
                  <div className={'main_title'}>{item.name}</div>
                  <div className={'sub_title'}>听证调试不能发送i的回复</div>
                </div>
              </div>
            )
          })}
        </main>
      </div>
      <div className={'dj_ranking'} style={{ marginTop: '30px' }}>
        <header>
          <div>电台排行榜</div>
          <div className={'filter'}>
            <span>
              <a href="/">上升最快</a>
            </span>
            <span>
              <a href="/">最热电台</a>
            </span>
          </div>
        </header>
        <main>
          {DjRanking.map((item, index) => {
            return (
              <div key={item.name} className={'djRankingContent'}>
                <DjRankingItem rankingItem={item}></DjRankingItem>
              </div>
            )
          })}
        </main>
        <PagiationWrapper>
          <Pagination
            defaultCurrent={1}
            total={DjRanking.length}
            pageSize={14}
            onChange={handlePageSizeIndex}
          />
          ;
        </PagiationWrapper>
      </div>
    </DjOtherPageWrapper>
  )
}

export default memo(DjOtherPage)
