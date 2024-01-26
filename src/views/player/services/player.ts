import hyRequest from '@/services'
import { SongList } from '@/views/player/services/types'

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
