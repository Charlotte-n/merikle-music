import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  Artist,
  SingerListParam
} from '@/views/discover/c-pages/singers/services/type'
import {
  getSingerListByLetterApi,
  getSingersApi
} from '@/views/discover/c-pages/singers/services'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error
export const fetchSingerListAction = createAsyncThunk(
  'singer_list',
  async (param: SingerListParam, { dispatch }) => {
    getSingersApi(param)
      .then((res) => {
        dispatch(changeSingerListAction(res.artists))
      })
      .catch((error) => {
        console.log(error + '出错了')
      })
  }
)
export const fetchAllSingersAction = createAsyncThunk(
  'all_singers',
  async (param: SingerListParam, { dispatch }) => {
    getSingersApi(param)
      .then((res) => {
        dispatch(changeAllSingersAction(res.artists))
      })
      .catch((error) => {
        console.log(error + '出错了')
      })
  }
)
//根据首字母来获取歌手
export const fetchSingerByLetterAction = createAsyncThunk(
  'singer_by_letter',
  async (letter: any, { dispatch }) => {
    getSingerListByLetterApi(letter)
      .then((res) => {
        dispatch(changeSingerListAction(res.artists))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface initialStateType {
  SingerList: Array<Artist>
  AllSingers: Array<Artist>
  SingerListLetter: Array<Artist>
}
const initialState: initialStateType = {
  SingerList: [],
  AllSingers: [],
  SingerListLetter: []
}
export const SingersSlice = createSlice({
  name: 'singer_slice',
  initialState,
  reducers: {
    changeSingerListAction(state, { payload }) {
      state.SingerList = payload
    },
    changeAllSingersAction(state, { payload }) {
      state.AllSingers = payload
    },
    changeSingerListLetterAction(state, { payload }) {
      state.SingerListLetter = payload
    }
  }
})
export const {
  changeSingerListAction,
  changeAllSingersAction,
  changeSingerListLetterAction
} = SingersSlice.actions
export default SingersSlice.reducer
