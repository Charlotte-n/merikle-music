//创建切片
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getCategorySongList,
  getSongListApi,
  getSongListCategory
} from '@/views/discover/c-pages/albums/services'
import { Categories, Sub } from '@/views/discover/c-pages/albums/services/type'

//异步请求
export const fetchAlbumSongListData = createAsyncThunk(
  'album_song_list',
  async (arg, { dispatch }) => {
    getSongListApi()
      .then((res) => {
        dispatch(changeAlbumsListAction(res.playlists))
      })
      .catch((error) => {
        console.log(error, '出现错误')
      })
    getSongListCategory()
      .then((res) => {
        dispatch(changeAlbumsCategoryAction(res))
      })
      .catch((error) => {
        console.log(error, '出现错误')
      })
  }
)
export const fetchCategorySongListAction = createAsyncThunk(
  'categorySsongList',
  async (cat: string, { dispatch }) => {
    //#region 获取分类标签的歌单
    getCategorySongList(cat)
      .then((res) => {
        dispatch(changeCategorySongListAction(res.playlists))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //endregion
  }
)
interface SongDetailType {
  albumsList: any
  albumsCategory: Sub[]
  categoryList: Categories
  categorySongList: []
}
const initialState: SongDetailType = {
  albumsList: [],
  albumsCategory: [],
  categoryList: {} as Categories,
  categorySongList: []
}
const albumsSongListSlice = createSlice({
  name: 'albumsSongList',
  initialState,
  reducers: {
    changeAlbumsListAction(state, { payload }) {
      state.albumsList = payload
    },
    changeAlbumsCategoryAction(state, { payload }) {
      state.albumsCategory = payload.sub
      state.categoryList = payload.categories
    },
    //获取分类标签的歌单
    changeCategorySongListAction(state, { payload }) {
      state.albumsList = payload
    }
  }
})
export const {
  changeAlbumsListAction,
  changeAlbumsCategoryAction,
  changeCategorySongListAction
} = albumsSongListSlice.actions

export default albumsSongListSlice.reducer
