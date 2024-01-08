import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getDjRadio,
  getDjRadioCat,
  getDjRadioRankingApi,
  getDjRadioRecommend,
  getDjRadiosRanking
} from '@/views/discover/c-pages/djradio/services'
import {
  Category,
  DjRadio,
  DjRanking,
  Toplist
} from '@/views/discover/c-pages/djradio/services/type'
import * as wasi from 'wasi'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

//获取电台分类
export const fetchDjCategoryAction = createAsyncThunk(
  'dj-category',
  async (arg, { dispatch }) => {
    getDjRadioCat()
      .then((res) => {
        dispatch(changeDjRadioAction(res.categories))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    getDjRadioRecommend()
      .then((res) => {
        dispatch(changeDjRadioRecommendAction(res.djRadios))
        console.log(res.djRadios)
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    getDjRadiosRanking().then((res) => {
      dispatch(changeDjRadioRankingAction(res.toplist))
    })
  }
)
//获取电台
export const fetchDjContentItemAction = createAsyncThunk(
  'dj-content',
  async (type: number, { dispatch }) => {
    getDjRadio(type)
      .then((res) => {
        dispatch(changeDjRadioContentItemAction(res.djRadios))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
//获取首页的列表
export const fetchHomeListAction = createAsyncThunk(
  'dj-home',
  async (arg, { dispatch }) => {
    const ids = [2, 3, 10001, 2001, 8]
    const promise: any[] = []
    //将请求的数据放入promise，统一进行调用
    for (const id of ids) {
      promise.push(getDjRadio(id))
    }
    //进行统一调用
    Promise.all(promise).then((res) => {
      const result = res.map((item) => item.djRadios)
      dispatch(changeDjHomeListAction(result))
    })
  }
)
//获取优秀新电台
export const fetchGoodDjAction = createAsyncThunk(
  'good_dj',
  async (id: string, { dispatch }) => {
    getDjRadio(id)
      .then((res) => {
        dispatch(changeGoodDjAction(res.djRadios))
      })
      .catch((error) => {
        console.log(error, '出粗了')
      })
  }
)
//获取电台排行榜
export const fetchDjRankingAction = createAsyncThunk(
  'dj-ranking',
  async (
    item: { limit: number; offset: number; cateId: string | number },
    { dispatch }
  ) => {
    getDjRadioRankingApi(item)
      .then((res) => {
        dispatch(changeDjRankingAction(res.djRadios))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface initialStateType {
  DjCategory: Category[]
  DjRadioRecommend: DjRadio[]
  DjRadiosRanking: Toplist[]
  DjContent: any
  DjHomeList: any[]
  goodDj: any[]
  DjRanking: any[]
}
const initialState: initialStateType = {
  DjCategory: [],
  DjRadioRecommend: [],
  DjRadiosRanking: [],
  DjContent: [],
  DjHomeList: [],
  goodDj: [],
  DjRanking: []
}
const DjRadioSlice = createSlice({
  name: 'djRadio',
  initialState,
  reducers: {
    changeDjRadioAction(state, { payload }) {
      state.DjCategory = payload
    },
    changeDjRadioRecommendAction(state, { payload }) {
      state.DjRadioRecommend = payload
    },
    changeDjRadioRankingAction(state, { payload }) {
      state.DjRadiosRanking = payload
    },
    changeDjRadioContentItemAction(state, { payload }) {
      state.DjContent = payload
    },
    changeDjHomeListAction(state, { payload }) {
      state.DjHomeList = payload
    },
    changeGoodDjAction(state, { payload }) {
      state.goodDj = payload
    },
    changeDjRankingAction(state, { payload }) {
      state.DjRanking = payload
    }
  }
})

export const {
  changeDjRadioAction,
  changeDjRadioRecommendAction,
  changeDjRadioRankingAction,
  changeDjRadioContentItemAction,
  changeDjHomeListAction,
  changeGoodDjAction,
  changeDjRankingAction
} = DjRadioSlice.actions

export default DjRadioSlice.reducer
