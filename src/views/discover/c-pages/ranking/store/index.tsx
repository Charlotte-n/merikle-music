import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getRankingDetailApi,
  getRankingListApi
} from '@/views/discover/c-pages/ranking/services'

export const fetchSongRankingListAction = createAsyncThunk(
  'song-ranking-list',
  (state, { dispatch }) => {
    getRankingListApi().then((res) => {
      dispatch(changeRankingListAction(res.list))
    })
  }
)
interface SongRankingProps {
  rankingList: []
}
const initialState: SongRankingProps = {
  rankingList: []
}
const SongRankingSlice = createSlice({
  name: 'song-ranking',
  initialState,
  reducers: {
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
    }
  }
})
export const { changeRankingListAction } = SongRankingSlice.actions

export default SongRankingSlice.reducer
