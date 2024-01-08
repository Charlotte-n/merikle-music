import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerDescribeWrapper } from '@/views/singers-list/c-pages/singer-desc/style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const SingerDescribe: FC<IProps> = () => {
  const { SingerDesc, SingerIntro } = useAppSelector((state) => {
    return {
      SingerDesc: state.SingleSingerDetailSlice.singerDesc,
      SingerIntro: state.SingleSingerDetailSlice.singerIntroduction
    }
  })
  return (
    <SingerDescribeWrapper>
      <div className={'img'}>
        <img src={SingerDesc.coverUrl} alt="" />
      </div>
      <div className={'singer_desc'}>
        <div className={'name'}>
          <div className={'singer_name'}>
            <span>{SingerDesc.creator?.nickname}</span>
            <span className={'level sprite_icon3'}></span>
            <span className={'gender sprite_icon2'}></span>
            <span className={'sprite_button2 sixin'}>
              <span>发私信</span>
            </span>
            <span className={'focus sprite_button2'}>
              <span>关注</span>
            </span>
          </div>
          <div className={'address'}>
            <span className={'sprite_icon3 renzheng'}></span>
            <span className={'singer'}>{SingerDesc?.title}</span>
          </div>
        </div>
        <div className={'dynamic'}>
          <ul>
            <li>
              <span>{SingerDesc?.shareCount}</span>
              <span>动态</span>
            </li>
            <li>
              <span>{SingerDesc?.commentCount}</span>
              <span>关注</span>
            </li>
            <li>
              <span>{SingerDesc?.likedCount}</span>
              <span>粉丝</span>
            </li>
          </ul>
        </div>
        <div className={'desc'}>
          <div className={'single'}>
            <dt>个人介绍:</dt>
            <dd style={{ width: '600px' }} className={'ellipsis_1'}>
              {SingerIntro}
            </dd>
          </div>
          <div className={'region'}>
            <dt>标签:</dt>
            {SingerDesc.tags?.map((item: string, index: number) => {
              return <dd key={index}>{item}</dd>
            })}
          </div>
        </div>
      </div>
    </SingerDescribeWrapper>
  )
}

export default memo(SingerDescribe)
