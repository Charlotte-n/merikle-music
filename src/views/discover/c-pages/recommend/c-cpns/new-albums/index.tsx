import React, { ElementRef, memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAblumsWrapper } from '@/views/discover/c-pages/recommend/c-cpns/new-albums/style'
import CommendHeader from '@/components/app-header-w1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewsItem from '@/components/news-item'

interface IProps {
  children?: ReactNode
}

const NewAlbums: FC<IProps> = () => {
  //获得轮播图实例
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrev = () => {
    bannerRef.current!.prev()
  }
  const handleNext = () => {
    bannerRef.current!.next()
  }
  //获取新碟上架的数据
  const { newsAlbumSongs } = useAppSelector((state) => {
    return {
      newsAlbumSongs: state.recommend.newsAlbumSongs
    }
  })
  return (
    <NewAblumsWrapper>
      <CommendHeader
        title="新碟上架"
        moreLink="/discover/albums"
      ></CommendHeader>
      <div className="banner">
        <div className="banner_item">
          <button
            className="sprite_02 arrow arrow_left"
            onClick={handlePrev}
          ></button>
          {/*展示轮播图*/}
          <div className="banners">
            <Carousel
              autoplay={false}
              speed={1500}
              ref={bannerRef}
              dots={false}
            >
              {[0, 1].map((item) => {
                return (
                  <div key={item}>
                    <div className="banner_item">
                      {newsAlbumSongs
                        ?.slice(item * 5, (item + 1) * 5)
                        .map((album: any) => {
                          return (
                            <div className="albums" key={album.id}>
                              <NewsItem albums={album}></NewsItem>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                )
              })}
            </Carousel>
          </div>
          <button
            className="sprite_02 arrow arrow_right"
            onClick={handleNext}
          ></button>
        </div>
      </div>
    </NewAblumsWrapper>
  )
}

export default memo(NewAlbums)
