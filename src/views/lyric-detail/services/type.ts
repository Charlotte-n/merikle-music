//#region 歌曲的详细信息类型
export interface LyricDetailType {
  songs: Song[]
  privileges: Privilege[]
  code: number
}

export interface Song {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: Sq
  hr: any
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: any
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  rtype: number
  rurl: any
  mst: number
  cp: number
  mv: number
  publishTime: number
}

export interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

export interface Al {
  id: number
  name: string
  picUrl: string
  tns: any[]
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

export interface M {
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

export interface Sq {
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

//#region 歌词
export interface LyricSongType {
  sgc: boolean
  sfy: boolean
  qfy: boolean
  lrc: Lrc
  klyric: Klyric
  tlyric: Tlyric
  romalrc: Romalrc
  code: number
}

export interface Lrc {
  version: number
  lyric: string
}

export interface Klyric {
  version: number
  lyric: string
}

export interface Tlyric {
  version: number
  lyric: string
}

export interface Romalrc {
  version: number
  lyric: string
}

//#endregion

//#region 歌单
export interface PlayListResponse {
  playlists: Playlist[]
  code: number
}

export interface Playlist {
  name: string
  id: number
  trackNumberUpdateTime: number
  status: number
  userId: number
  createTime: number
  updateTime: number
  subscribedCount: number
  trackCount: number
  cloudTrackCount: number
  coverImgUrl: string
  coverImgId: number
  description: string
  tags: string[]
  playCount: number
  trackUpdateTime: number
  specialType: number
  totalDuration: number
  creator: Creator
  tracks: any
  subscribers: any[]
  subscribed: boolean
  commentThreadId: string
  newImported: boolean
  adType: number
  highQuality: boolean
  privacy: number
  ordered: boolean
  anonimous: boolean
  coverStatus: number
  recommendInfo: any
  socialPlaylistCover: any
  recommendText: any
  coverText: any
  relateResType: any
  relateResId: any
  extProperties: ExtProperties
  recommendReason: string
  xInfo: XInfo
  iconImgUrl: any
  tsSongCount: number
  alg: string
}

export interface Creator {
  extProperties: any
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: string[]
  experts?: Experts
  djStatus: number
  vipType: number
  remarkName: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  xInfo: any
}

export interface Experts {
  '2': string
}

export interface ExtProperties {
  coverImgId_str: string
}

export interface XInfo {
  coverImgId_str: string
}

//endregion

//#region 相似歌曲
export interface SimiSong {
  songs: simSong[]
  code: number
}

export interface simSong {
  starred: boolean
  popularity: number
  starredNum: number
  playedNum: number
  dayPlays: number
  hearTime: number
  mp3Url: string
  mark: number
  noCopyrightRcmd: any
  originCoverType: number
  originSongSimpleData: any
  songJumpInfo: any
  crbt: any
  hMusic: HMusic
  mMusic: MMusic
  lMusic: LMusic
  audition: any
  copyFrom: string
  ringtone: string
  disc: string
  no: number
  fee: number
  alias: string[]
  artists: Artist[]
  copyrightId: number
  album: Album
  score: number
  commentThreadId: string
  mvid: number
  sqMusic: SqMusic
  hrMusic: any
  rtUrl: any
  ftype: number
  bMusic: BMusic
  rtype: number
  rurl: any
  duration: number
  position: number
  status: number
  name: string
  id: number
  recommendReason: string
  privilege: Privilege
  alg: string
}

export interface HMusic {
  volumeDelta: number
  playTime: number
  bitrate: number
  sr: number
  dfsId: number
  name: string
  id: number
  size: number
  extension: string
}

export interface MMusic {
  volumeDelta: number
  playTime: number
  bitrate: number
  sr: number
  dfsId: number
  name: string
  id: number
  size: number
  extension: string
}

export interface LMusic {
  volumeDelta: number
  playTime: number
  bitrate: number
  sr: number
  dfsId: number
  name: string
  id: number
  size: number
  extension: string
}

export interface Artist {
  img1v1Id: number
  topicPerson: number
  briefDesc: string
  musicSize: number
  albumSize: number
  alias: any[]
  picId: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  name: string
  id: number
  img1v1Id_str: string
}

export interface Album {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  blurPicUrl: string
  companyId: number
  publishTime: number
  company: string
  briefDesc: string
  alias: string[]
  artists: Artist2[]
  copyrightId: number
  picId: number
  artist: Artist3
  pic: number
  picUrl: string
  commentThreadId: string
  description: string
  tags: string
  status: number
  subType: string
  name: string
  id: number
  type: string
  size: number
  picId_str?: string
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  briefDesc: string
  musicSize: number
  albumSize: number
  alias: any[]
  picId: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  name: string
  id: number
  img1v1Id_str: string
}

export interface Artist3 {
  img1v1Id: number
  topicPerson: number
  briefDesc: string
  musicSize: number
  albumSize: number
  alias: any[]
  picId: number
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  name: string
  id: number
  img1v1Id_str: string
}

export interface SqMusic {
  volumeDelta: number
  playTime: number
  bitrate: number
  sr: number
  dfsId: number
  name: string
  id: number
  size: number
  extension: string
}

export interface BMusic {
  volumeDelta: number
  playTime: number
  bitrate: number
  sr: number
  dfsId: number
  name: string
  id: number
  size: number
  extension: string
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
