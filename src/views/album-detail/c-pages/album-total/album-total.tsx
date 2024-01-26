import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumTotalWrapper } from '@/views/album-detail/c-pages/album-total/style'
import Operation from '@/components/operation/operation'
import { useAppSelector } from '@/store'
import { formatTime, formatYearTime } from '@/utils/formate'

interface IProps {
  children?: ReactNode
}

const AlbumTotal: FC<IProps> = () => {
  //拿数据
  //@ts-ignore
  const { AlbumDetail } = useAppSelector((state) => {
    return {
      AlbumDetail: state.AlbumDetailSlice.AlbumDetail
    }
  })

  return (
    <AlbumTotalWrapper>
      <div className={'album_overview'}>
        <img src={AlbumDetail?.album?.blurPicUrl} alt="" />
        <div className={'album_view'}>
          <div className={'title'}>
            <span className={'sprite_icon2'}></span>
            <span>{AlbumDetail.album?.name}</span>
          </div>
          <ul>
            <li>
              <span>歌手:</span>
              <span>{AlbumDetail.album?.artist?.name}</span>
            </li>
            <li>
              <span>发行时间:</span>
              <span>{formatYearTime(AlbumDetail.album?.publishTime)}</span>
            </li>
            <li>
              <span>发行公司:</span>
              <span>{AlbumDetail.album?.company}</span>
            </li>
          </ul>
          <Operation></Operation>
        </div>
      </div>
      <div className={'album_desc'}>
        <h6>专辑介绍:</h6>
        <p>{AlbumDetail.album?.description}</p>
      </div>
    </AlbumTotalWrapper>
  )
}

export default memo(AlbumTotal)
