import hyRequest from '@/services'

/**
 * 获取用户信息
 * @param uid
 */
export const getProfile = (uid: string) => {
  return hyRequest.get({
    url: '/user/detail?uid=' + uid
  })
}
