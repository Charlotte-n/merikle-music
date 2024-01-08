import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getLyricSongApi,
  getSimilarPlayListApi,
  getSimilarSongApi,
  getSongsDetail
} from '@/views/lyric-detail/services'
import { Playlist, simSong, Song } from '@/views/lyric-detail/services/type'

export const fetchLyricDetailAction = createAsyncThunk(
  'lyric_detail_song',
  async (ids: string, { dispatch }) => {
    getSongsDetail(ids)
      .then((res) => {
        dispatch(changeLyricDetailAction(res.songs))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //获取歌词
    getLyricSongApi(ids)
      .then((res) => {
        const regex = /\[\d{2}:\d{2}\.\d+\]/g
        const result = res?.lrc.lyric.replace(regex, '')
        dispatch(changeLyricSongAction(result))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //获取相似歌单
    getSimilarPlayListApi(ids)
      .then((res) => {
        dispatch(changeSimilarPlayListAction(res.playlists))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //相似歌曲
    getSimilarSongApi(ids)
      .then((res) => {
        dispatch(changeSimilarSongAction(res.songs))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)

interface initialStateType {
  LyricDetail: Song[]
  LyricSong: string
  similarPlayList: Playlist[]
  similarSong: simSong[]
}
export const initialState: initialStateType = {
  LyricDetail: [],
  LyricSong: '',
  similarPlayList: [],
  similarSong: []
}
export const LyricDetailSlice = createSlice({
  extraReducers: undefined,
  initialState: initialState,
  name: 'lyric_detail',
  reducers: {
    changeLyricDetailAction(state, { payload }) {
      state.LyricDetail = payload
    },
    changeLyricSongAction(state, { payload }) {
      state.LyricSong = payload
    },
    changeSimilarPlayListAction(state, { payload }) {
      state.similarPlayList = payload
    },
    changeSimilarSongAction(state, { payload }) {
      state.similarSong = payload
    }
  }
})
export const {
  changeLyricDetailAction,
  changeLyricSongAction,
  changeSimilarPlayListAction,
  changeSimilarSongAction
} = LyricDetailSlice.actions
export default LyricDetailSlice.reducer
