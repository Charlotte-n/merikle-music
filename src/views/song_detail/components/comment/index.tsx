import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  CommentContent,
  CommentHeader,
  CommentWrapper,
  PaginationWrapper
} from '@/views/song_detail/components/comment/style'
import TextArea from 'antd/es/input/TextArea'
import UserComment from '@/views/song_detail/components/user-comment'
import { useAppSelector } from '@/store'
import { Pagination } from 'antd'

interface IProps {
  children?: ReactNode
  getPageIndex: (val: number) => void
}

const Comment: FC<IProps> = (props) => {
  const { getPageIndex } = props
  const { commentList } = useAppSelector((state) => {
    return {
      commentList: state.songDetail.commentList
    }
  })
  const handlePageIndex = (val: number) => {
    getPageIndex(val)
  }
  useEffect(() => {
    console.log('我是评论list', commentList.comments)
    return () => {}
  }, [])

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('Change:', e.target.value)
  }
  return (
    <CommentWrapper>
      <CommentHeader>
        <h2>评论</h2>
        <span>共{commentList.total}条评论</span>
      </CommentHeader>
      <CommentContent>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="text">
          <TextArea
            showCount
            maxLength={200}
            onChange={onChange}
            placeholder="评论"
            style={{ height: '70px' }}
          />
          <div className="button">
            <button className="btn">评论</button>
          </div>
        </div>
        {/*  精彩评论组件*/}
      </CommentContent>
      <UserComment commentList={commentList.comments}></UserComment>
      <PaginationWrapper className="pagination">
        <Pagination
          defaultCurrent={1}
          total={commentList.total}
          onChange={handlePageIndex}
          pageSize={50}
        />
        ;
      </PaginationWrapper>
    </CommentWrapper>
  )
}

export default memo(Comment)
