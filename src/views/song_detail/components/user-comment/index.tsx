import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserCommentWrapper } from '@/views/song_detail/components/user-comment/style'
import { Comment } from '@/views/song_detail/services/type'

interface IProps {
  children?: ReactNode
  commentList: Comment[]
}

const UserComment: FC<IProps> = (props) => {
  const { commentList } = props
  return (
    <UserCommentWrapper>
      <div className="header">精彩评论</div>
      <div>
        {commentList?.map((item) => {
          return (
            <div key={item.commentId}>
              <div className="user_comment">
                <div className="img">
                  <img src={item.user.avatarUrl} alt="" />
                </div>
                <div className="content">
                  <div>
                    <span>{item.user.nickname}</span>:{item.content}
                  </div>
                  <div className="time">
                    <div>{item.timeStr}</div>
                    <div>
                      <span className="follow">赞({item.likedCount})</span>
                      <span className="answer">回复</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </UserCommentWrapper>
  )
}

export default memo(UserComment)
