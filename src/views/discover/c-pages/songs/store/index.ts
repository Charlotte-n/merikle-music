import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getAllAlbumsApi,
  getHotAlbumApi
} from '@/views/discover/c-pages/songs/services'
import { MonthDaum } from '@/views/discover/c-pages/songs/services/type'

export const fetchHotAlbumsAction = createAsyncThunk(
  'hot_albums',
  (arg, { dispatch }) => {
    getHotAlbumApi()
      .then((res) => {
        dispatch(changeHotAlbumsAction(res.monthData.slice(0, 10)))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface AllAlbumsApiParam {
  limit: number
  offset: number
  area: string
}
export const fetchAllAlbumsAction = createAsyncThunk(
  'all_albums',
  async (param: AllAlbumsApiParam, { dispatch }) => {
    getAllAlbumsApi(param)
      .then((res) => {
        dispatch(changeAllAlbumsAction(res))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface initialStateType {
  HotAlbums: MonthDaum[]
  AllAlbums: any
}
const initialState: initialStateType = {
  HotAlbums: [],
  AllAlbums: {}
}
const AlbumsSlice = createSlice({
  name: 'ablum_slice',
  initialState,
  reducers: {
    changeHotAlbumsAction(state, { payload }) {
      state.HotAlbums = payload
    },
    changeAllAlbumsAction(state, { payload }) {
      state.AllAlbums = payload
    }
  }
})
export const { changeHotAlbumsAction, changeAllAlbumsAction } =
  AlbumsSlice.actions
export default AlbumsSlice.reducer
