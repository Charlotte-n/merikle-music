import hyRequest from '@/services'

/**
 * 搜索功能
 * @param keywords
 * @param type
 * @constructor
 */
export const SearchWordsApi = ({
  keywords,
  type
}: {
  keywords: string
  type: string | number
}) => {
  return hyRequest.get({
    url: `/cloudsearch?keywords=${keywords}&type=${type}`
  })
}
