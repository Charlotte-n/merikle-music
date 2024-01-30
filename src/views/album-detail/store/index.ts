import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAlbumsDetail } from '@/views/album-detail/services'
import { AlbumDetailType } from '@/views/album-detail/services/type'

//异步请求
export const fetchAlbumDetailAction = createAsyncThunk(
  'album_detail',
  async (id: string | number, { dispatch }) => {
    getAlbumsDetail(id)
      .then((res) => {
        dispatch(changeAlbumDetailAction(res))
        dispatch(changeAlbumSongListAction(res.songs))
      })
      .catch((error) => {
        console.log(error, '出现未知错误')
      })
  }
)

interface AlbumDetailState {
  AlbumDetail: AlbumDetailType
  AlbumSongList: any
}
const initialState: AlbumDetailState = {
  AlbumDetail: {} as AlbumDetailType,
  AlbumSongList: []
}
const albumDetailSlice = createSlice({
  name: 'albumDetail',
  initialState,
  reducers: {
    changeAlbumDetailAction: (state, { payload }) => {
      state.AlbumDetail = payload
    },
    changeAlbumSongListAction: (state, { payload }) => {
      state.AlbumSongList = payload
    }
  }
})

export const { changeAlbumDetailAction, changeAlbumSongListAction } =
  albumDetailSlice.actions
export default albumDetailSlice.reducer
