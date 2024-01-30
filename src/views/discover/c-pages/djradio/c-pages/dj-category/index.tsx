import React, { ElementRef, memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import { shallowEqual } from 'react-redux'
import {
  BannerControlWrapper,
  CategoryImgItemWrapper,
  DjCategoryWrapper
} from '@/views/discover/c-pages/djradio/c-pages/dj-category/style'
import { useNavigate, useParams } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const DjRadioCategory: FC<IProps> = () => {
  //设置点击后的状态
  const [status, setStatus] = useState()
  const carouselRef = useRef<any>()
  //使用redux里面的数据
  const { DjCategory } = useAppSelector((state) => {
    return {
      DjCategory: state.DjRadioSlice.DjCategory
    }
  }, shallowEqual)
  const PAGE_SIZE = 18
  //计算分为了几组
  const group = Math.ceil(DjCategory.length / PAGE_SIZE) || 1
  //将数据进行拆分
  const getSize = (index: number) => {
    return PAGE_SIZE * index > DjCategory.length
      ? DjCategory.length
      : PAGE_SIZE * index
  }
  const navigate = useNavigate()
  const handleGoToPage = (id: number) => {
    navigate(`/discover/djradio?id=${id}`)
  }
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <DjCategoryWrapper>
      <div className="banner">
        <Carousel
          dots={{ className: 'dots' }}
          style={{ width: '850px', margin: 'auto', minHeight: '150px' }}
          effect={'fade'}
          ref={carouselRef}
        >
          {Array(group)
            .fill(0)
            .map((item, index) => {
              return (
                <div key={item} className={'category_group'}>
                  {DjCategory.slice(index * PAGE_SIZE, getSize(index + 1)).map(
                    (item, index) => {
                      return (
                        <div
                          key={item.id}
                          className={'category_item'}
                          onClick={() => handleGoToPage(item.id)}
                        >
                          <CategoryImgItemWrapper
                            imgurl={item.picWebUrl}
                          ></CategoryImgItemWrapper>
                          <span style={{ color: '#888888' }}>{item.name}</span>
                        </div>
                      )
                    }
                  )}
                </div>
              )
            })}
        </Carousel>
        <BannerControlWrapper>
          <button
            className="btn left"
            onClick={(e) => carouselRef.current!.next()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => carouselRef.current!.prev()}
          ></button>
        </BannerControlWrapper>
      </div>
    </DjCategoryWrapper>
  )
}

export default memo(DjRadioCategory)
