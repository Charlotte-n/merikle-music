import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  CommentContent,
  CommentHeader,
  CommentWrapper,
  PaginationWrapper
} from '@/views/song_detail/components/comment/style'
import TextArea from 'antd/es/input/TextArea'
import UserComment from '@/views/song_detail/components/user-comment'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Button, message, Pagination } from 'antd'
import { sendCommentApi, sendCommentType } from '@/api'

interface IProps {
  children?: ReactNode
  getPageIndex: (val: number) => void
  param: {
    t: number
    type: number
    id: number
  }
}

const Comment: FC<IProps> = (props) => {
  const { profile, userInfo } = useAppSelector((state) => {
    return {
      userInfo: state.LoginStore.userInfo,
      profile: state.LoginStore.profile
    }
  }, shallowEqualApp)
  const [content, setContent] = useState('')
  //发评论
  const { param } = props
  const [messageApi, contextHolder] = message.useMessage()
  const info = () => {
    messageApi.open({
      type: 'success',
      content: '发送成功'
    })
  }
  const sendComment = async () => {
    const res = await sendCommentApi({ ...param, content })
    if (res.code >= 200 && res.code <= 400) {
      //清空内容
      setContent('')
      info()
    }
  }
  const { avatarUrl } = profile
  const { getPageIndex } = props
  const { commentList } = useAppSelector((state) => {
    return {
      commentList: state.songDetail.commentList
    }
  })
  const handlePageIndex = (val: number) => {
    console.log(val)
    getPageIndex(val)
  }

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value)
  }
  return (
    <CommentWrapper>
      <CommentHeader>
        <h2>评论</h2>
        <span>共{commentList.total}条评论</span>
      </CommentHeader>
      <CommentContent>
        <div className="img">
          <img src={avatarUrl} alt="" />
        </div>
        <div className="text">
          <TextArea
            showCount
            maxLength={200}
            onChange={onChange}
            placeholder="评论"
            value={content}
            style={{ height: '70px' }}
          />
          <div className="button">
            {contextHolder}
            <Button
              type="primary"
              className="btn"
              onClick={() => sendComment()}
            >
              评论
            </Button>
          </div>
        </div>
        {/*  精彩评论组件*/}
      </CommentContent>
      <UserComment commentList={commentList.comments}></UserComment>
      <PaginationWrapper className="pagination">
        <Pagination
          defaultCurrent={1}
          pageSize={50}
          onChange={handlePageIndex}
          total={commentList.total}
        />
      </PaginationWrapper>
    </CommentWrapper>
  )
}

export default memo(Comment)
