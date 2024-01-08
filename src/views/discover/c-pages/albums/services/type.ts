//歌单分类标签
export interface category {
  sub: Sub[]
}

export interface Sub {
  name: string
  resourceCount: number
  imgId: number
  imgUrl: any
  type: number
  category: number
  resourceType: number
  hot: boolean
  activity: boolean
}

export interface Categories {
  '0': string
  '1': string
  '2': string
  '3': string
  '4': string
}
