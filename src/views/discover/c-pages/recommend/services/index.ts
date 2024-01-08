import hyRequest from '@/services'
import {
  hotRecommendApi,
  RecommendRanking
} from '@/views/discover/c-pages/recommend/services/types'

/**
 * 获得轮播图数据
 */
export const getBannerApi = () => {
  return hyRequest.get({
    url: '/banner'
  })
}
/**
 * 获得热门推荐歌单
 * @constructor
 */
export const HotRecommendApi = (limit = 30) => {
  return hyRequest.get<hotRecommendApi>({
    url: '/personalized',
    params: {
      limit
    }
  })
}

/**
 * 获取新碟上架的歌曲
 * @constructor
 */
export const NewAlubmApi = () => {
  return hyRequest.get({
    url: '/album/newest'
  })
}

/**
 * 获取推荐页面的榜单数据
 * @param id:number
 * @constructor
 */
export const RecommendRankingApi = (id: number) => {
  return hyRequest.get<RecommendRanking>({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

/**
 * 获取入驻歌手的信息
 * @param limit
 */

export function ArtistListApi(limit = 30) {
  return hyRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
