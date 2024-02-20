import { SongList } from '@/views/player/services/types'
import HYRequest from '@/services/request'
import { BASE_URL, TIME_OUT } from '@/services/config'
import store from '@/store'
import { changeLoading } from '@/store/modules/common'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  interceptors: {
    requestSuccessFn: (config) => {
      store.dispatch(changeLoading(false))
      return config
    },
    responseSuccessFn: (res) => {
      store.dispatch(changeLoading(false))
      console.log(res)
      return res
    }
  }
})
/**
 * 获取歌曲详情
 * @param id
 */
export const getSongDetail = (id: any) => {
  return hyRequest.get({
    url: `/song/detail?ids=${id}`
  })
}
/**
 * 获取歌词
 * @param id
 */
export const getLyric = (id: string) => {
  return hyRequest.get({
    url: `/lyric?id=${id}`
  })
}

/**
 * 获取歌单
 * @param id
 */
export const getSongList = (id: any) => {
  return hyRequest.get<SongList>({
    url: `/playlist/detail?id=${id}`
  })
}

/**
 * 获取歌曲的url地址
 * @param id
 */
export const getSongUrl = (id: string) => {
  return hyRequest.get({
    url: '/song/url/v1?id=' + id
  })
}

/**
 * 检查歌曲是否能用
 * @param id
 */
export const checkMusic = (id: string) => {
  return hyRequest.get({
    url: '/check/music?id' + id
  })
}
