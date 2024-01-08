import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumsPaginationWrapper } from '@/views/discover/c-pages/albums/c-pages/albums-pagination/style'
import { Pagination, PaginationProps } from 'antd'
import { current } from '@reduxjs/toolkit'

interface IProps {
  children?: ReactNode
  getPageSize: (val: number) => void
  total: number
}

const AlbumsPagination: FC<IProps> = (props) => {
  const { getPageSize, total } = props
  const pageSize = 50
  const [current, setCurrent] = useState(1)
  const handleChangePage: PaginationProps['onChange'] = (page) => {
    getPageSize(page)
    setCurrent(page)
  }
  return (
    <AlbumsPaginationWrapper>
      <Pagination
        showSizeChanger={false}
        current={current}
        onChange={handleChangePage}
        total={total}
        pageSize={pageSize}
      />
      ;
    </AlbumsPaginationWrapper>
  )
}

export default memo(AlbumsPagination)
