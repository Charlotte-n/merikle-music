import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  RadioLeft,
  RadioRight,
  RecommendRadioWrapper
} from '@/views/discover/c-pages/djradio/c-pages/recommend-radio/style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { DjRadio } from '@/views/discover/c-pages/djradio/services/type'

interface IProps {
  children?: ReactNode
}

const RecommendRadio: FC<IProps> = () => {
  const { DjRecommend, DjRanking } = useAppSelector((state) => {
    return {
      DjRecommend: state.DjRadioSlice.DjRadioRecommend,
      DjRanking: state.DjRadioSlice.DjRadiosRanking
    }
  }, shallowEqualApp)
  useEffect(() => {
    console.log(DjRecommend)
    return () => {}
  }, [])

  return (
    <RecommendRadioWrapper>
      <RadioLeft>
        <div className={'header'}>
          <h3>推荐节目</h3>
          <span>更多 &gt;</span>
        </div>
        <ul className={'list'}>
          {DjRecommend.map((item: DjRadio, index: number) => {
            return (
              <li key={item.id} className={'item'}>
                <div className={'radio_item'}>
                  <div className={'img '}>
                    <img src={item.picUrl} alt="" />
                  </div>
                  <div className={'content'}>
                    <p className={'title ellipsis_1'}>{item.rcmdtext}</p>

                    <p className={'radio_source ellipsis_1'}>
                      {item.dj.nickname}
                    </p>
                  </div>
                  <div className={'source'}>{item.category}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </RadioLeft>
      <RadioRight>
        <div className={'header'}>
          <h3>节目排行榜</h3>
          <span>更多 &gt;</span>
        </div>
        <ul className={'list'}>
          {DjRanking?.slice(0, 10).map((item, index) => {
            return (
              <li className={'item'} key={index}>
                <div className={'radio_item'}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '1',
                      textAlign: 'center'
                    }}
                  >
                    <span style={{ color: ' #C20C0C', fontSize: '16px' }}>
                      01
                    </span>
                    <span style={{ color: '#C6C6C6', marginTop: '3px' }}>
                      -0
                    </span>
                  </div>
                  <div className={'img'}>
                    <img src={item.program.coverUrl} alt="" />
                  </div>
                  <div className={'content'}>
                    <p className={'title ellipsis_1'}>{item.program.name}</p>
                    <p className={'radio_source ellipsis_1'}>
                      {item.program.description}
                    </p>
                  </div>
                  <div className={'source'}>音乐博客</div>
                </div>
              </li>
            )
          })}
        </ul>
      </RadioRight>
    </RecommendRadioWrapper>
  )
}

export default memo(RecommendRadio)
