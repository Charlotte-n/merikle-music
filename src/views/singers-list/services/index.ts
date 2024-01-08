import hyRequest from '@/services'
import {
  SingerSongs,
  SingleSingerDescType
} from '@/views/singers-list/services/type'

/**
 * 获取歌手描述
 * @param id
 */
export const getSingerDesc = (id: string | number) => {
  return hyRequest.get<SingleSingerDescType>({
    url: `/artist/desc?id=${id}`
  })
}

/**
 * 获取歌手的歌曲
 * @param id
 */

export const getSingerSongApi = (id: string | number) => {
  return hyRequest.get<SingerSongs>({
    url: `/artist/songs?id=${id}`
  })
}
