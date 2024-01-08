import hyRequest from '@/services'
import { SingerListResponse } from '@/views/discover/c-pages/singers/services/type'

/**
 * 获取歌手列表
 * @param type
 * @param limit
 * @param area
 */
export const getSingersApi = ({ type = 1, limit = 10, area = -1 }) => {
  return hyRequest.get<SingerListResponse>({
    url: `/artist/list?type=${type}&limit=${limit}&area=${area}`
  })
}
export const getSingerListByLetterApi = ({
  type = 1,
  limit = 10,
  area = -1,
  initial = 'a'
}) => {
  return hyRequest.get<SingerListResponse>({
    url: `/artist/list?type=${type}&limit=${limit}&area=${area}&initial=${initial}`
  })
}
