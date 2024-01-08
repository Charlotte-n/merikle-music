import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CommendRecommend } from '@/components/app-header-w1/style'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchCategorySongListAction } from '@/views/discover/c-pages/albums/store'

interface IProps {
  children?: ReactNode
  title?: string
  subtitles?: string[]
  moreText?: string
  moreLink?: string
}

const CommendHeader: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    subtitles = [],
    moreText = '更多',
    moreLink = '/'
  } = props
  const navigate = useNavigate()
  //@ts-ignore
  const dispatch = useAppDispatch()
  const handlegoAlbumList = (item: string) => {
    //改变仓库里面的albums数据
    dispatch(fetchCategorySongListAction(item))
    navigate('/discover/albums')
  }
  return (
    <CommendRecommend className="">
      <div className="title">
        <i className="sprite_02"></i>
        <h2 className="hot">{title}</h2>
        <div className="subtitles">
          <div className="subtitles">
            {subtitles.map((item) => {
              return (
                <a
                  key={item}
                  className="subtitle-item"
                  onClick={() => handlegoAlbumList(item)}
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
        <Link className="more" to={moreLink}>
          <span className="more_message">{moreText}</span>
          <span className="icon sprite_02"></span>
        </Link>
      </div>
    </CommendRecommend>
  )
}

export default memo(CommendHeader)
