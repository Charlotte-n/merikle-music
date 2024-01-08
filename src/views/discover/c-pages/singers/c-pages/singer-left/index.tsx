import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerLeftWrapper } from '@/views/discover/c-pages/singers/c-pages/singer-left/style'
import SingerCateItem from '@/views/discover/c-pages/singers/components/singer-cate-item'
import { SingerCategoryConfig } from '@/views/discover/c-pages/singers/config'

interface IProps {
  children?: ReactNode
  getRightTitle: (title: string[]) => void
  getSingersParam: (val: any) => void
}

const SingerLeft: FC<IProps> = (props) => {
  const { getRightTitle, getSingersParam } = props
  return (
    <SingerLeftWrapper>
      {SingerCategoryConfig.map((item) => {
        return (
          <div key={item.title} className="singer_cate">
            <SingerCateItem
              config={item}
              getRightTitle={getRightTitle}
              getSingersParam={getSingersParam}
            ></SingerCateItem>
          </div>
        )
      })}
    </SingerLeftWrapper>
  )
}

export default memo(SingerLeft)
