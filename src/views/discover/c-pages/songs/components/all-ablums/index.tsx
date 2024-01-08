import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AllAlbumsWrapper } from '@/views/discover/c-pages/songs/components/all-ablums/style'
import { useAppDispatch, useAppSelector } from '@/store'
import { allAlbumsCateData } from '@/views/discover/c-pages/songs/config/data'
import { fetchAllAlbumsAction } from '@/views/discover/c-pages/songs/store'
import { Pagination } from 'antd'
import { PaginationWrapper } from '@/views/discover/c-pages/songs/components/all-ablums/style'
import NewsItem from '@/components/news-item'

interface IProps {
  children?: ReactNode
}

const AllAlbums: FC<IProps> = () => {
  //@ts-ignore
  const dispatch = useAppDispatch()
  const title = useRef('ALL')
  const { allAlbums } = useAppSelector((state) => {
    return {
      allAlbums: state.AlbumsSlice.AllAlbums
    }
  })
  const handleAllAlbums = (area: string) => {
    //标签发生变化了也要请求数据
    dispatch(fetchAllAlbumsAction({ limit: 50, offset: 0, area }))
    title.current = area
  }
  const handlePageIndex = (page: number) => {
    //页数发生变化了也重新请求数据
    dispatch(
      fetchAllAlbumsAction({
        limit: 50,
        offset: (page - 1) * 50,
        area: title.current
      })
    )
  }

  return (
    <AllAlbumsWrapper>
      <div className={'album_header'}>
        <div className={'main_title'}>全部新碟</div>
        <div className={'sub_title'}>
          {allAlbumsCateData.map((item) => {
            return (
              <span
                className={'album_item active'}
                key={item.title}
                onClick={() => handleAllAlbums(item.area)}
              >
                {item.title}
              </span>
            )
          })}
        </div>
      </div>
      <div className={'all_albums'}>
        {allAlbums.albums?.map((item: any) => {
          return <NewsItem albums={item} key={item.id}></NewsItem>
        })}
      </div>
      <PaginationWrapper className="pagination">
        <Pagination
          defaultCurrent={1}
          total={allAlbums.total}
          onChange={handlePageIndex}
          pageSize={50}
        />
        ;
      </PaginationWrapper>
    </AllAlbumsWrapper>
  )
}

export default memo(AllAlbums)
