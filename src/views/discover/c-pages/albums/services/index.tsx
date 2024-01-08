//获取歌单
import hyRequest from '@/services'

/**
 * 获取歌单
 */
export const getSongListApi = () => {
  return hyRequest.get({
    url: '/top/playlist?limit=300'
  })
}

/**
 *歌单分类
 */
export const getSongListCategory = () => {
  return hyRequest.get({
    url: '/playlist/catlist'
  })
}

export const getCategorySongList = (cat: string) => {
  return hyRequest.get({
    url: `/top/playlist/highquality?cat=${cat}`
  })
}
