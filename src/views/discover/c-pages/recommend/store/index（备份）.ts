import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBannerApi,
  HotRecommendApi,
  NewAlubmApi
} from '@/views/discover/c-pages/recommend/services'
import type { singleHotRecommendSong } from '@/views/discover/c-pages/recommend/services/types'
import { NewAblumsWrapper } from '@/views/discover/c-pages/recommend/c-cpns/new-albums/style'

//异步获取轮播图数据
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBannerApi()
    dispatch(changeBannerAction(res.banners))
  }
)

//获取热门推荐歌单数据
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommendSongs',
  async (arg, { dispatch }) => {
    const res = await HotRecommendApi(8)
    console.log(res.result)
    dispatch(changeHotRecommendAction(res.result))
  }
)

//获取新碟上架的歌单数据
export const fetchNewAlbumAction = createAsyncThunk(
  'NewAlbumSongs',
  async (arg, { dispatch }) => {
    const res = await NewAlubmApi()
    dispatch(changeNewAlbumSongs(res.weekData))
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommendSongs: singleHotRecommendSong[]
  newsAlbumSongs: any[]
}
//仓库保存数据
const initialState: IRecommendState = {
  banners: [],
  hotRecommendSongs: [],
  newsAlbumSongs: []
}
//创建切片
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendSongs = payload
    },
    changeNewAlbumSongs(state, { payload }) {
      state.newsAlbumSongs = payload
    }
  }
})
export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumSongs
} = recommendSlice.actions
export default recommendSlice.reducer
