import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRankingListApi } from '@/views/discover/c-pages/ranking/services'

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
  rankingId: number
}
const initialState: SongRankingProps = {
  rankingList: [],
  rankingId: 0
}
const SongRankingSlice = createSlice({
  name: 'song-ranking',
  initialState,
  reducers: {
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
      state.rankingId = payload[0].id
    }
  }
})
export const { changeRankingListAction } = SongRankingSlice.actions

export default SongRankingSlice.reducer
