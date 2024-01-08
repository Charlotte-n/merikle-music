import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerCateItemWrapper } from '@/views/discover/c-pages/singers/components/singer-cate-item/style'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchAllSingersAction,
  fetchSingerListAction
} from '@/views/discover/c-pages/singers/store'

interface IProps {
  children?: ReactNode
  config: any
  getRightTitle: (title: string[]) => void
  getSingersParam: (val: any) => void
}

const SingerCateItem: FC<IProps> = (props) => {
  const { config, getRightTitle, getSingersParam } = props
  const [title, setTitle] = useState('推荐歌手')
  const Param = useRef({
    type: -1,
    area: -1,
    limit: 10
  })
  const Param2 = useRef({
    type: -1,
    area: -1,
    limit: 50
  })
  // @ts-ignore
  const dispatch = useAppDispatch()
  const handleCateClick = (type: number, area: number, title: string) => {
    setTitle(title)
    //当为入驻歌手的时候滚动到下面的时候实现无线滚动效果
    Param.current = {
      type: type,
      area: area,
      limit: title == '入驻歌手' ? 30 : 10
    }
    Param2.current = {
      type: type,
      area: area,
      limit: 50
    }
    //让数据发生变化
    dispatch(fetchSingerListAction(Param.current!))
    let newTitle: string[]
    title === '推荐歌手'
      ? (newTitle = ['推荐歌手', '入驻歌手'])
      : (newTitle = [title])
    //让数据2发生变化
    dispatch(fetchAllSingersAction(Param2.current!))
    //获取右边的header部分
    getRightTitle(newTitle)
    //获取type，area
    getSingersParam({ type, area })
  }

  useEffect(() => {
    return () => {}
  }, [Param.current])

  return (
    <SingerCateItemWrapper>
      <h3>{config.title}</h3>
      <ul>
        {config.artists.map((item: any, index: number) => (
          <li
            key={item.name}
            onClick={() => handleCateClick(item.type, config.area, item.name)}
            className={item.name === title ? 'active' : ''}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </SingerCateItemWrapper>
  )
}

export default memo(SingerCateItem)
