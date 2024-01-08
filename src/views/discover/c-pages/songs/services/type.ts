//新碟上架
export interface HotAlbums {
  weekData: WeekDaum[]
  hasMore: boolean
  monthData: MonthDaum[]
  code: number
}

export interface WeekDaum {
  songs: any[]
  paid: boolean
  onSale: boolean
  tags: string
  copyrightId: number
  artists: Artist[]
  artist: Artist2
  picId: number
  company: string
  status: number
  pic: number
  commentThreadId: string
  publishTime: number
  picUrl: string
  briefDesc: string
  companyId: number
  blurPicUrl: string
  subType: string
  description: string
  alias: string[]
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  areaId: number
  exclusive: boolean
  isSub: boolean
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  followed: boolean
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  briefDesc: string
  alias: any[]
  name: string
  id: number
  img1v1Id_str: string
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  followed: boolean
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  briefDesc: string
  alias: string[]
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}

export interface MonthDaum {
  songs: any[]
  paid: boolean
  onSale: boolean
  tags: string
  copyrightId: number
  artists: Artist3[]
  artist: Artist4
  picId: number
  company: string
  status: number
  pic: number
  commentThreadId: string
  publishTime: number
  picUrl: string
  briefDesc: string
  companyId: number
  blurPicUrl: string
  subType: string
  description: string
  alias: string[]
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  areaId: number
  exclusive: boolean
  isSub: boolean
  transNames?: string[]
}

export interface Artist3 {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  followed: boolean
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  briefDesc: string
  alias: any[]
  name: string
  id: number
  img1v1Id_str: string
}

export interface Artist4 {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  followed: boolean
  trans: string
  albumSize: number
  img1v1Url: string
  picUrl: string
  briefDesc: string
  alias: string[]
  name: string
  id: number
  picId_str?: string
  img1v1Id_str: string
  transNames?: string[]
}
