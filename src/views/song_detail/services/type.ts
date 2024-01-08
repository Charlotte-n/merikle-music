//评论列表
export interface CommentListType {
  isMusician: boolean
  cnum: number
  userId: number
  topComments: any[]
  moreHot: boolean
  hotComments: HotComment[]
  commentBanner: any
  code: number
  comments: Comment[]
  total: number
  more: boolean
}

export interface HotComment {
  user: User
  beReplied: any[]
  pendantData: any
  showFloorComment: any
  status: number
  commentId: number
  content: string
  richContent: any
  contentResource: any
  time: number
  timeStr: string
  needDisplayTime: boolean
  likedCount: number
  expressionUrl: any
  commentLocationType: number
  parentCommentId: number
  decoration?: Decoration
  repliedMark: any
  grade: any
  userBizLevels: any
  ipLocation: IpLocation
  owner: boolean
  liked: boolean
}

export interface User {
  locationInfo: any
  liveInfo: any
  anonym: number
  commonIdentity: any
  avatarDetail: any
  userType: number
  avatarUrl: string
  followed: boolean
  mutual: boolean
  remarkName: any
  socialUserId: any
  vipRights: VipRights
  nickname: string
  authStatus: number
  expertTags: any
  experts: any
  vipType: number
  userId: number
  target: any
}

export interface VipRights {
  associator: any
  musicPackage: any
  redplus: any
  redVipAnnualCount: number
  redVipLevel: number
}

export interface Decoration {
  repliedByAuthorCount: number
}

export interface IpLocation {
  ip: any
  location: string
  userId: any
}

export interface Comment {
  user: User2
  beReplied: BeReplied[]
  pendantData?: PendantData
  showFloorComment: any
  status: number
  commentId: number
  content: string
  richContent: any
  contentResource: any
  time: number
  timeStr: string
  needDisplayTime: boolean
  likedCount: number
  expressionUrl: any
  commentLocationType: number
  parentCommentId: number
  decoration?: Decoration2
  repliedMark: any
  grade: any
  userBizLevels: any
  ipLocation: IpLocation3
  owner: boolean
  liked: boolean
}

export interface User2 {
  locationInfo: any
  liveInfo: any
  anonym: number
  commonIdentity: any
  avatarDetail: any
  userType: number
  avatarUrl: string
  followed: boolean
  mutual: boolean
  remarkName: any
  socialUserId: any
  vipRights?: VipRights2
  nickname: string
  authStatus: number
  expertTags: any
  experts: any
  vipType: number
  userId: number
  target: any
}

export interface VipRights2 {
  associator?: Associator
  musicPackage?: MusicPackage
  redplus: any
  redVipAnnualCount: number
  redVipLevel: number
}

export interface Associator {
  vipCode: number
  rights: boolean
  iconUrl: string
}

export interface MusicPackage {
  vipCode: number
  rights: boolean
  iconUrl: string
}

export interface BeReplied {
  user: User3
  beRepliedCommentId: number
  content: string
  richContent: any
  status: number
  expressionUrl: any
  ipLocation: IpLocation2
}

export interface User3 {
  locationInfo: any
  liveInfo: any
  anonym: number
  commonIdentity: any
  avatarDetail: any
  userType: number
  avatarUrl: string
  followed: boolean
  mutual: boolean
  remarkName: any
  socialUserId: any
  vipRights: any
  nickname: string
  authStatus: number
  expertTags: any
  experts: any
  vipType: number
  userId: number
  target: any
}

export interface IpLocation2 {
  ip: any
  location: string
  userId: any
}

export interface PendantData {
  id: number
  imageUrl: string
}

export interface Decoration2 {}

export interface IpLocation3 {
  ip: any
  location: string
  userId?: number
}
