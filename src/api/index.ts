//发送评论

import hyRequest from '@/services'
import store from '@/store'
export interface sendCommentType {
  t: number
  type: number
  id: number
  content: string
}

/**
 * 发送评论
 * @param sendCommentParam
 */
export const sendCommentApi = (sendCommentParam: sendCommentType) => {
  return hyRequest.post({
    url: `/comment?time=` + new Date(),
    data: {
      cookie: store.getState().LoginStore.userInfo.cookie,
      ...sendCommentParam
    }
  })
}
