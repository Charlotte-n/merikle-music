import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  ArtistListApi,
  getBannerApi,
  HotRecommendApi,
  NewAlubmApi,
  RecommendRankingApi
} from '@/views/discover/c-pages/recommend/services'
import type {
  Playlist,
  RecommendRanking,
  singleHotRecommendSong
} from '@/views/discover/c-pages/recommend/services/types'

//手机登录
//异步获取轮播图数据
export const fetchRecommendDataAction = createAsyncThunk(
  'banners',
  //获取banner数据
  async (arg, { dispatch }) => {
    getBannerApi().then((res) => {
      dispatch(changeBannerAction(res.banners))
    })
    //获取热门推荐数据
    HotRecommendApi(8).then((res) => {
      dispatch(changeLoading(false))
      dispatch(changeHotRecommendAction(res.result))
    })
    //获取新专辑数据
    NewAlubmApi().then((res) => {
      dispatch(changeNewAlbumSongs(res.albums))
    })
    //获取歌手数据
    ArtistListApi().then((res) => {
      dispatch(changeArtilist(res.artists))
    })
  }
)
//获取榜单数据,
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRecommendRank = createAsyncThunk(
  'rank',
  async (arg, { dispatch }) => {
    const promise: any[] = []
    //将请求的数据放入promise，统一进行调用
    for (const id of rankingIds) {
      promise.push(RecommendRankingApi(id))
    }
    //进行统一调用
    Promise.all(promise).then((res: RecommendRanking[]) => {
      const result = res.map((item) => item.playlist)
      dispatch(changeRankingSongs(result))
    })
  }
)

interface IRecommendState {
  banners: any[]
  hotRecommendSongs: singleHotRecommendSong[]
  newsAlbumSongs: any[]
  rankingSongs: Playlist[]
  Artilist: any[]
  loginKey: number | string
  code: string
  loginStatus: number | string
  loading: boolean
  imageLoading: boolean
}
//仓库保存数据
const initialState: IRecommendState = {
  banners: [],
  hotRecommendSongs: [],
  newsAlbumSongs: [],
  rankingSongs: [],
  Artilist: [],
  loginKey: 1,
  code: '',
  loginStatus: 801,
  loading: true,
  imageLoading: true
}
//创建切片
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
      console.log(payload)
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendSongs = payload
    },
    changeNewAlbumSongs(state, { payload }) {
      state.newsAlbumSongs = payload
    },
    changeRankingSongs(state, { payload }) {
      state.rankingSongs = payload
    },
    changeArtilist(state, { payload }) {
      state.Artilist = payload
    },
    changeLoginKey(state, { payload }) {
      state.loginKey = payload
    },
    changeCode(state, { payload }) {
      state.code = payload
    },
    changeLoginStatus(state, { payload }) {
      state.loginStatus = payload
    },
    changeLoading(state, { payload }) {
      state.loading = payload
    },
    changeImageLoading(state, { payload }) {
      state.imageLoading = payload
    }
  }
})
export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumSongs,
  changeRankingSongs,
  changeArtilist,
  changeLoginKey,
  changeCode,
  changeLoading,
  changeLoginStatus,
  changeImageLoading
} = recommendSlice.actions
export default recommendSlice.reducer
