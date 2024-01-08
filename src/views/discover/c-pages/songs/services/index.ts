import hyRequest from '@/services'
import { HotAlbums } from '@/views/discover/c-pages/songs/services/type'

export const getHotAlbumApi = () => {
  return hyRequest.get<HotAlbums>({
    url: '/top/album'
  })
}
export const getAllAlbumsApi = (param: {
  limit: number
  offset: number
  area: string
}) => {
  return hyRequest.get({
    url: `/album/new?limit=${param.limit}&offset=${param.offset}&area=${param.area}`
  })
}
