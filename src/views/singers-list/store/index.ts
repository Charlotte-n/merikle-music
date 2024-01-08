import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  Creator,
  SingerSongs,
  Song,
  Topic,
  TopicDaum
} from '@/views/singers-list/services/type'
import { getSingerDesc, getSingerSongApi } from '@/views/singers-list/services'

//获取单个歌手的简介
export const fetchSingleSingerDetail = createAsyncThunk(
  'singer_detail',
  async (id: string | number, { dispatch }) => {
    getSingerDesc(id)
      .then((res) => {
        dispatch(changeSingerDesc(res.topicData[0]))
        dispatch(changeSingerIntroduction(res.briefDesc))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //获取歌手歌曲
    getSingerSongApi(id)
      .then((res) => {
        dispatch(changeSingerSongsAction(res))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface initialStateType {
  singerDesc: TopicDaum
  singerIntroduction: string
  singerSongs: SingerSongs
}
const initialState: initialStateType = {
  singerDesc: {} as TopicDaum,
  singerIntroduction: '',
  singerSongs: {} as SingerSongs
}
const SingleSingerDetailSlice = createSlice({
  name: 'singleSinger',
  initialState: initialState,
  reducers: {
    changeSingerDesc(state, { payload }) {
      state.singerDesc = payload
    },
    changeSingerIntroduction(state, { payload }) {
      state.singerIntroduction = payload
    },
    changeSingerSongsAction(state, { payload }) {
      state.singerSongs = payload
    }
  }
})
export const {
  changeSingerDesc,
  changeSingerIntroduction,
  changeSingerSongsAction
} = SingleSingerDetailSlice.actions
export default SingleSingerDetailSlice.reducer
