//发送评论

import hyRequest from '@/services'

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
    url: `/comment?t=${sendCommentParam.t}&type=${sendCommentParam.type}&id=${sendCommentParam.id}&content=${sendCommentParam.content}`
  })
}
