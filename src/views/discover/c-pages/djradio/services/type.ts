//Dj分类
export interface DjCategoryType {
  categories: Category[]
  code: number
}

export interface Category {
  picPCWhite: number
  picPCBlack: number
  pic96x96Url: string
  pic84x84IdUrl: string
  picPCWhiteStr: string
  picPCWhiteUrl: string
  picPCBlackStr: string
  pic56x56Url: string
  pic96x96IdStr: string
  pic56x56IdStr: string
  picPCBlackUrl: string
  picWebStr: string
  picWebUrl: string
  picMacId: string
  picMacUrl: string
  picUWPId: string
  picUWPUrl: string
  picIPadStr: string
  picIPadUrl: string
  pic56x56Id: number
  pic96x96Id: number
  picWeb: number
  picIPad: number
  pic84x84Id: number
  name: string
  id: number
}

//节目推荐
export interface CategoryRecommendType {
  djRadios: DjRadio[]
  name: string
  code: number
}

export interface DjRadio {
  id: number
  name: string
  picUrl: string
  programCount: number
  subCount: number
  createTime: number
  categoryId: number
  category: string
  rcmdtext?: string
  radioFeeType: number
  feeScope: number
  playCount: number
  subed: boolean
  dj: Dj
  copywriter: string
  buyed: boolean
}

export interface Dj {
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
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  backgroundImgIdStr: string
  avatarImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

//电台节目榜
export interface DjRanking {
  updateTime: number
  toplist: Toplist[]
  code: number
}

export interface Toplist {
  program: Program
  rank: number
  lastRank: number
  score: number
  programFeeType: number
}

export interface Program {
  mainSong: MainSong
  songs: any
  dj: Dj
  blurCoverUrl: string
  radio: Radio
  duration: number
  authDTO: any
  buyed: boolean
  programDesc: any
  h5Links: any
  canReward: boolean
  auditStatus: number
  videoInfo: any
  score: number
  liveInfo: any
  alg: any
  disPlayStatus: any
  auditDisPlayStatus: number
  categoryName: any
  secondCategoryName: any
  existLyric: boolean
  djPlayRecordVo: any
  recommended: boolean
  icon: any
  additionIconList: any
  adIconInfo: any
  replaceVoiceId: number
  replaceResource: any
  songTimeStamps: any
  trackCount: number
  titbitImages: any
  isPublish: boolean
  categoryId: number
  channels: string[]
  commentThreadId: string
  createEventId: number
  scheduledPublishTime: number
  serialNum: number
  listenerCount: number
  coverId: number
  coverUrl: string
  smallLanguageAuditStatus: number
  bdAuditStatus: number
  secondCategoryId: number
  pubStatus: number
  programFeeType: number
  mainTrackId: number
  titbits: any
  feeScope: number
  subscribedCount: number
  reward: boolean
  privacy: boolean
  description: string
  createTime: number
  name: string
  id: number
  subscribed: boolean
  shareCount: number
  likedCount: number
  commentCount: number
}

export interface MainSong {
  name: string
  id: number
  position: number
  alias: any[]
  status: number
  fee: number
  copyrightId: number
  disc: string
  no: number
  artists: Artist[]
  album: Album
  starred: boolean
  popularity: number
  score: number
  starredNum: number
  duration: number
  playedNum: number
  dayPlays: number
  hearTime: number
  ringtone?: string
  crbt: any
  audition: any
  copyFrom: string
  commentThreadId: string
  rtUrl: any
  ftype: number
  rtUrls: any[]
  copyright: number
  transName: any
  sign: any
  mark: number
  noCopyrightRcmd: any
  rtype: number
  rurl: any
  mvid: number
  bMusic: BMusic
  mp3Url: any
  hMusic?: HMusic
  mMusic?: MMusic
  lMusic: LMusic
}

export interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface Album {
  name?: string
  id: number
  type?: string
  size: number
  picId: number
  blurPicUrl?: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company?: string
  briefDesc: string
  artist: Artist2
  songs: any[]
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist3[]
  subType?: string
  transName: any
  mark: number
  picId_str?: string
}

export interface Artist2 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface Artist3 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface BMusic {
  name?: string
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
  dfsId_str: any
}

export interface HMusic {
  name?: string
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface MMusic {
  name?: string
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
  dfsId_str: any
}

export interface LMusic {
  name?: string
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
  dfsId_str: any
}

export interface Radio {
  dj: any
  category: string
  secondCategory: string
  buyed: boolean
  price: number
  originalPrice: number
  discountPrice: any
  purchaseCount: number
  lastProgramName: any
  videos: any
  finished: boolean
  underShelf: boolean
  liveInfo: any
  playCount: number
  privacy: boolean
  icon: any
  manualTagsDTO: any
  descPicList?: DescPicList[]
  replaceRadioId: number
  replaceRadio: any
  dynamic: boolean
  picUrl: string
  picId: number
  categoryId: number
  taskId: number
  shortName?: string
  programCount: number
  subCount: number
  lastProgramId: number
  feeScope: number
  lastProgramCreateTime: number
  radioFeeType: number
  intervenePicUrl: string
  intervenePicId: number
  desc: string
  createTime: number
  name: string
  id: number
  subed: boolean
}

export interface DescPicList {
  type: number
  id: number
  content: string
  height: number
  width: number
  timeStamp: any
}
