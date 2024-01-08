export interface SongRankingType {
  code: number
  list: List[]
  artistToplist: ArtistToplist
}

export interface List {
  subscribers: any[]
  subscribed: any
  creator: any
  artists: any
  tracks: any
  updateFrequency: string
  backgroundCoverId: number
  backgroundCoverUrl: any
  titleImage: number
  coverText: any
  titleImageUrl: any
  coverImageUrl: any
  iconImageUrl: any
  englishTitle: any
  opRecommend: boolean
  recommendInfo: any
  socialPlaylistCover: any
  tsSongCount: number
  adType: number
  trackNumberUpdateTime: number
  subscribedCount: number
  highQuality: boolean
  cloudTrackCount: number
  specialType: number
  updateTime: number
  anonimous: boolean
  coverImgId: number
  newImported: boolean
  coverImgUrl: string
  trackCount: number
  trackUpdateTime: number
  totalDuration: number
  privacy: number
  commentThreadId: string
  playCount: number
  createTime: number
  ordered: boolean
  description?: string
  status: number
  tags: string[]
  userId: number
  name: string
  id: number
  coverImgId_str: string
  ToplistType?: string
}

export interface ArtistToplist {
  coverUrl: string
  name: string
  upateFrequency: string
  position: number
  updateFrequency: string
}
