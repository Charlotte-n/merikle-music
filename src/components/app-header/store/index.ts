import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SearchWordsApi } from '@/components/app-header/services'

enum songType {
  singleSong = 1,
  singer = 100,
  albums = 10,
  songList = 1000
}
export const fetchSearchSingleSongAction = createAsyncThunk(
  'search_info',
  async (
    { keywords, type }: { keywords: string; type: string | number },
    { dispatch }
  ) => {
    SearchWordsApi({ keywords, type })
      .then((res) => {
        dispatch(changeSearchInfoAction({ info: res.result, type: type }))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)

interface initialStateType {
  singleSong: any[]
  singer: any
  albums: any
  songs: any
}
const initialState: initialStateType = {
  singleSong: [],
  singer: [],
  albums: [],
  songs: []
}
export const AppHeaderSlice = createSlice({
  extraReducers: undefined,
  initialState: initialState,
  reducers: {
    changeSearchInfoAction: (state, { payload }) => {
      const { type, info } = payload
      if (type == songType.singleSong) {
        state.singleSong = info.songs
      } else if (type == songType.singer) {
        state.singer = info.artists
      } else if (type == songType.albums) {
        state.albums = info.albums
      } else if (type == songType.songList) {
        state.songs = info.playlists
      }
    }
  },
  name: 'app_header'
})

export const { changeSearchInfoAction } = AppHeaderSlice.actions
export default AppHeaderSlice.reducer
