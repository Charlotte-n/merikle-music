import hyRequest from '@/services'
import { SongRankingType } from '@/views/discover/c-pages/ranking/services/type'

/**
 * 获取榜单
 */
export const getRankingListApi = () => {
  return hyRequest.get<SongRankingType>({
    url: '/toplist'
  })
}

/**
 * 歌单详情
 * @param id
 */
export const getRankingDetailApi = (id: number | string) => {
  return hyRequest.get({
    url: `/playlist/detail?id=${id}`
  })
}
