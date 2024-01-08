import hyRequest from '@/services'
import { CommentListType } from '@/views/song_detail/services/type'

export const getSongListApi = (id: number | string) => {
  return hyRequest.get({
    url: `/playlist/track/all?id=${id}`
  })
}

/**
 * 获取歌单详情
 * @param id
 */
export const getPlayListApi = (id: string | number) => {
  return hyRequest.get({
    url: `/playlist/detail?id=${id}`
  })
}

/**
 * 获取评论列表
 * @param id
 */
export const getCommentListApi = (
  id: string | number,
  offset: number | string
) => {
  return hyRequest.get<CommentListType>({
    url: `/comment/playlist?id=${id}&limit=50&offset=${offset}`
  })
}
