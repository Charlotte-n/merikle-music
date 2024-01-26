import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DjHomeItemWrapper } from '@/views/discover/c-pages/djradio/c-components/dj-home-item/style'

interface IProps {
  children?: ReactNode
  categoryItem: any
}
const DjHomeItem: FC<IProps> = (props) => {
  const { categoryItem } = props
  return (
    <DjHomeItemWrapper>
      <header>
        <div>
          {/*{categoryItem[0].category}*/}
          <span></span>
          电台
        </div>
        <div className={'more'}>更多&gt;</div>
      </header>
      <main>
        {categoryItem?.slice(0, 4).map((item: any, index: number) => {
          return (
            <div key={item.picId} className={'radio_item'}>
              <div className={'img'}>
                <img src={item.picUrl} alt="" />
              </div>
              <div className={'title'}>
                <span className={'main_title'}>{item.name}</span>
                <span className={'description'}>{item.lastProgramName}</span>
              </div>
            </div>
          )
        })}
      </main>
    </DjHomeItemWrapper>
  )
}

export default memo(DjHomeItem)
