import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import SingerHeader from '@/views/discover/c-pages/singers/components/singer-header'
import SingerItem from '@/views/discover/c-pages/singers/components/singer-item'
import { Artist } from '@/views/discover/c-pages/singers/services/type'
import { SingerRightItemWrapper } from '@/views/discover/c-pages/singers/components/singer-right-item/style'
import HotBar from '@/views/discover/c-pages/singers/components/hot-bar'

interface IProps {
  children?: ReactNode
  data: Artist[]
  title: any
  Params: {
    type: number
    area: number
  }
}

const SingerRightItem: FC<IProps> = (props) => {
  const { data, title, Params } = props
  return (
    <SingerRightItemWrapper>
      {/*这个是通用样式*/}
      {title.map((item: any) => {
        return (
          <div key={item}>
            <SingerHeader
              title={item}
              subTitle={item === '入驻歌手' ? title : ''}
            ></SingerHeader>
            {title[0] === '推荐歌手' || title[0] === '入驻歌手' ? (
              ''
            ) : (
              <HotBar Params={Params}></HotBar>
            )}
            <div className="singer_some">
              {data.map((item) => {
                return (
                  <div key={item.id} className="item">
                    <SingerItem data={item}></SingerItem>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </SingerRightItemWrapper>
  )
}

export default memo(SingerRightItem)
