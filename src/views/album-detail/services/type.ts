//region
export interface AlbumDetailType {
  resourceState: boolean
  songs: Song[]
  code: number
  album: Album
}

export interface Song {
  rtUrls: any[]
  ar: Ar[]
  al: Al
  st: number
  noCopyrightRcmd: any
  songJumpInfo: any
  rtype: number
  rurl: any
  pst: number
  alia: any[]
  pop: number
  rt: string
  mst: number
  cp: number
  crbt: any
  cf: string
  dt: number
  h: H
  sq: any
  hr: any
  l: L
  rtUrl: any
  ftype: number
  djId: number
  no: number
  fee: number
  mv: number
  t: number
  v: number
  cd: string
  a: any
  m: M
  name: string
  id: number
  privilege: Privilege
}

export interface Ar {
  id: number
  name: string
  tns?: string[]
  alia?: string[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  pic_str: string
  pic: number
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface L {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface M {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Privilege {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

export interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any
}

export interface ChargeInfoList {
  rate: number
  chargeUrl: any
  chargeMessage: any
  chargeType: number
}

export interface Album {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  companyId: number
  blurPicUrl: string
  artists: Artist[]
  copyrightId: number
  picId: number
  artist: Artist2
  briefDesc: string
  publishTime: number
  company: string
  picUrl: string
  commentThreadId: string
  pic: number
  status: number
  subType: string
  alias: any[]
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  info: Info
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  img1v1Url: string
  trans: string
  alias: any[]
  name: string
  id: number
  img1v1Id_str: string
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  followed: boolean
  picId: number
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  img1v1Url: string
  trans: string
  alias: any[]
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}

export interface Info {
  commentThread: CommentThread
  latestLikedUsers: any
  liked: boolean
  comments: any
  resourceType: number
  resourceId: number
  commentCount: number
  likedCount: number
  shareCount: number
  threadId: string
}

export interface CommentThread {
  id: string
  resourceInfo: ResourceInfo
  resourceType: number
  commentCount: number
  likedCount: number
  shareCount: number
  hotCount: number
  latestLikedUsers: any
  resourceOwnerId: number
  resourceTitle: string
  resourceId: number
}

export interface ResourceInfo {
  id: number
  userId: number
  name: string
  imgUrl: string
  creator: any
  encodedId: any
  subTitle: any
  webUrl: any
}

//#endregion
