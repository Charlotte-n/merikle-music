import React, { ElementRef, memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { Carousel } from 'antd'
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/views/discover/c-pages/recommend/c-cpns/top-banner/style'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { BannerControlWrapper } from '@/views/discover/c-pages/djradio/c-pages/dj-category/style'
import { useNavigate, useNavigation } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  //记录轮播图的位置
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  //使用redux里面的数据
  const { banner } = useAppSelector((state) => {
    return {
      banner: state.recommend.banners
    }
  }, shallowEqual)
  const handlePreBanner = () => {
    bannerRef.current?.prev()
  }
  const handleNextBanner = () => {
    bannerRef.current?.next()
  }
  //#region 切换轮播图的一些行为
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }
  //获取轮播图的图片
  let bgImage = banner[currentIndex]?.imageUrl
  if (bgImage) {
    bgImage += '?imageView&blur=40x20'
  }
  //endregion
  //跳转到详情页面
  const navigate = useNavigate()
  const gotoDetail = (id: number | string) => {
    if (id == '0') {
      id = 2115522604
    }
    // navigation.
    navigate('/lyric/detail?id=' + id)
  }
  return (
    <div>
      <BannerWrapper
        className="banners"
        style={{ background: `url('${bgImage}') center center / 6000px` }}
      >
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              dots={false}
              autoplay
              style={{ width: '730px' }}
              ref={bannerRef}
              effect={'fade'}
              afterChange={handleAfterChange}
            >
              {banner.map((item) => {
                return (
                  <div
                    key={item.imageUrl}
                    className="banner-item"
                    onClick={() => gotoDetail(item.encodeId)}
                  >
                    <img src={item.imageUrl} alt="" />
                  </div>
                )
              })}
            </Carousel>
            <ul className="dots">
              {banner.map((item, index) => {
                return (
                  <li className="dot" key={index}>
                    <span
                      className={classNames('item', {
                        active: index === currentIndex
                      })}
                    ></span>
                  </li>
                )
              })}
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={handlePreBanner}></button>
            <button className="btn right" onClick={handleNextBanner}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}

export default memo(TopBanner)
