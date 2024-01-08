import hyRequest from '@/services'
import {
  LyricDetailType,
  LyricSongType,
  PlayListResponse,
  SimiSong
} from '@/views/lyric-detail/services/type'
import similarSong from '@/views/lyric-detail/c-pages/similar-song'

/**
 * 歌曲细节
 * @param ids
 */
export const getSongsDetail = (ids: string) => {
  return hyRequest.get<LyricDetailType>({
    url: `/song/detail?ids=${ids}`
  })
}

/**
 * 获取歌词
 * @param id
 */
export const getLyricSongApi = (id: string) => {
  return hyRequest.get<LyricSongType>({
    url: `/lyric?id=${id}`
  })
}

/**
 * 歌曲评论
 * @param id
 * @param limit
 */
export const getLyricCommentApi = ({
  id,
  limit,
  offset
}: {
  id: string
  limit: number
  offset: number
}) => {
  return hyRequest.get({
    url: `/comment/music?id=${id}&limit=${limit}&offset=${offset}`
  })
}
/**
 * 获取相似歌单
 * @param id
 */
export const getSimilarPlayListApi = (id: string | number) => {
  return hyRequest.get<PlayListResponse>({
    url: `/simi/playlist?id=${id}`
  })
}
/**
 * 获取相似歌曲
 * @param id
 */
export const getSimilarSongApi = (id: string | number) => {
  return hyRequest.get<SimiSong>({
    url: `/simi/song?id=${id}`
  })
}
