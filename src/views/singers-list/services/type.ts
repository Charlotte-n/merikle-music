//#region 获取歌手的个人描述
export interface SingleSingerDescType {
  introduction: Introduction[]
  briefDesc: string
  count: number
  topicData: TopicDaum[]
  code: number
}

export interface Introduction {
  ti: string
  txt: string
}

export interface TopicDaum {
  topic: Topic
  creator: Creator
  shareCount: number
  commentCount: number
  likedCount: number
  liked: boolean
  rewardCount: number
  rewardMoney: number
  relatedResource: any
  rectanglePicUrl: string
  coverUrl: string
  categoryId: number
  categoryName: string
  mainTitle: string
  commentThreadId: string
  showRelated: boolean
  memo: any
  summary: string
  recmdTitle: string
  recmdContent: string
  reward: boolean
  shareContent: string
  wxTitle: string
  addTime: number
  seriesId: number
  showComment: boolean
  readCount: number
  url: string
  title: string
  tags: string[]
  id: number
  number: number
}

export interface Topic {
  id: number
  addTime: number
  mainTitle: string
  title: string
  content: Content[]
  userId: number
  cover: number
  headPic: number
  shareContent: string
  wxTitle: string
  showComment: boolean
  status: number
  seriesId: number
  pubTime: number
  readCount: number
  tags: string[]
  pubImmidiatly: boolean
  auditor: string
  auditTime: number
  auditStatus: number
  startText: string
  delReason: string
  showRelated: boolean
  fromBackend: boolean
  rectanglePic: number
  updateTime: number
  reward: boolean
  summary: string
  memo: any
  adInfo: string
  categoryId: number
  hotScore: number
  recomdTitle: string
  recomdContent: string
  number: number
}

export interface Content {
  type: number
  id: number
  content?: string
}

export interface Creator {
  userId: number
  userType: number
  nickname: string
  avatarImgId: number
  avatarUrl: string
  backgroundImgId: number
  backgroundUrl: string
  signature: string
  createTime: number
  userName: string
  accountType: number
  shortUserName: string
  birthday: number
  authority: number
  gender: number
  accountStatus: number
  province: number
  city: number
  authStatus: number
  description?: string
  detailDescription?: string
  defaultAvatar: boolean
  expertTags?: string[]
  experts?: Experts
  djStatus: number
  locationStatus: number
  vipType: number
  followed: boolean
  mutual: boolean
  authenticated: boolean
  lastLoginTime: number
  lastLoginIP: string
  remarkName: any
  viptypeVersion: number
  authenticationTypes: number
  avatarDetail: any
  anchor: boolean
}

export interface Experts {
  '1': string
}

//endregion

//#region 获取歌手歌曲
export interface SingerSongs {
  songs: Song[]
  more: boolean
  total: number
  code: number
}

export interface Song {
  rtUrls: any[]
  ar: Ar[]
  al: Al
  st: number
  noCopyrightRcmd?: NoCopyrightRcmd
  songJumpInfo: any
  rtype: number
  rurl: any
  pst: number
  alia: string[]
  pop: number
  rt?: string
  mst: number
  cp: number
  crbt: any
  cf: string
  dt: number
  h?: H
  sq?: Sq
  hr?: Hr
  l?: L
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
  m?: M
  name: string
  id: number
  privilege: Privilege
  eq?: string
  tns?: string[]
}

export interface Ar {
  id: number
  name: string
}

export interface Al {
  id: number
  name: string
  pic_str: string
  pic: number
  alia?: string[]
  tns?: string[]
}

export interface NoCopyrightRcmd {
  type: number
  typeDesc: string
  songId: any
  thirdPartySong: any
  expInfo: any
}

export interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Sq {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

export interface Hr {
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

//endregion
