import hyRequest from '@/services'

/**
 * 获取专辑详情
 * @param id
 */
export const getAlbumsDetail = (id: number | string) => {
  return hyRequest.get({
    url: '/album',
    params: {
      id
    }
  })
}
/**
 * 获得专辑评论
 * @param id
 */
export const getAlbumComment = (id: number | string) => {
  return hyRequest.get({
    url: '/comment/album',
    params: {
      id
    }
  })
}
