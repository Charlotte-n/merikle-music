import hyRequest from '@/services'
import {
  CategoryRecommendType,
  DjCategoryType,
  DjRanking
} from '@/views/discover/c-pages/djradio/services/type'

export const getDjRadioCat = () => {
  return hyRequest.get<DjCategoryType>({
    url: '/dj/catelist'
  })
}

/**
 * 获取节目推荐数据
 *
 */
export function getDjRadioRecommend() {
  return hyRequest.get<CategoryRecommendType>({
    url: '/dj/recommend'
  })
}

/**
 * 节目排行榜
 */
export function getDjRadiosRanking() {
  return hyRequest.get<DjRanking>({
    url: '/dj/program/toplist'
  })
}

export function getDjRadio(type: number | string) {
  return hyRequest.get({
    url: `/dj/recommend/type?type=${type}`
  })
}

export function getDjRadioRankingApi({
  limit,
  offset,
  cateId
}: {
  limit: number
  offset: number
  cateId: string | number
}) {
  return hyRequest.get({
    url: `/dj/radio/hot?limit=${limit}&offset=${offset}&cateId=${cateId}`
  })
}
