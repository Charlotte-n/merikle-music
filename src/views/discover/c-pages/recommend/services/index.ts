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

/**
 * 获取key
 */
export const getLoginKey = () => {
  return hyRequest.get({
    url: '/login/qr/key/' + new Date()
  })
}

/**
 * 获取code
 * @param key
 */
export const getLoginCode = (key: string) => {
  return hyRequest.get({
    url: '/login/qr/create?key=' + key + '/' + new Date()
  })
}

/**
 * 获取扫码状态
 * @param key
 */
export const checkCodeStatus = (key: string) => {
  return hyRequest.get({
    url: '/login/qr/check/time' + new Date() + '?key=' + key
  })
}

/**
 * 手机账号密码登录
 * @param phone
 * @param password
 * @param captcha
 * @constructor
 */
interface ParamType {
  phone: string
  password?: string
  captcha?: string
}
export const PhoneLoginAxios = (Param: ParamType) => {
  return hyRequest.post({
    url: '/login/cellphone',
    params: {
      phone: Param.phone,
      password: Param.password,
      captcha: Param.captcha
    }
  })
}

/**
 * 获取验证码
 * @param phone
 */
export const getPhoneCode = (phone: string | number) => {
  return hyRequest.post({
    url: '/captcha/sent?time=' + new Date(),
    params: {
      phone
    }
  })
}
/**
 * 检验验证码是否正确
 * @param phone
 * @param captcha
 */

export const verifyPhoneCode = (
  phone: string | number,
  captcha: string | number
) => {
  return hyRequest.get({
    url: '/captcha/verify',
    params: {
      phone,
      captcha
    }
  })
}

/**
 * 游客登录
 * @constructor
 */

export const PassByLoginApi = () => {
  return hyRequest.get({
    url: '/register/anonimous?time=' + new Date()
  })
}
