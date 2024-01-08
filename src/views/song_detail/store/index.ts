//创建切片
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HotRecommendApi } from '@/views/discover/c-pages/recommend/services'
import {
  getCommentListApi,
  getPlayListApi,
  getSongListApi
} from '@/views/song_detail/services'
import { CommentListType, HotComment } from '@/views/song_detail/services/type'
import { getLyricCommentApi } from '@/views/lyric-detail/services'

//异步请求
export const fetchHotSongListDataAction = createAsyncThunk(
  'hot_song_list',
  async (id: string | number, { dispatch }) => {
    //获取热门歌单
    HotRecommendApi(5)
      .then((res) => {
        dispatch(changeHotSongListAction(res.result))
      })
      .catch((error) => {
        console.log(error)
      })
    // 获取歌单的所有歌曲
    getSongListApi(id)
      .then((res) => {
        dispatch(changeHotSongListTableAction(res.songs))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
    //获取歌单大体的详细内容
    getPlayListApi(id)
      .then((res) => {
        dispatch(changeSongDetailAction(res.playlist))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
//歌单评论
export const fetchCommentListAction = createAsyncThunk(
  'commentList',
  async (result: { id: any; offset: any }, { dispatch }) => {
    getCommentListApi(result.id, result.offset)
      .then((res) => {
        dispatch(changeCommentListAction(res))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
//歌曲评论
export const fetchLyricCommentAction = createAsyncThunk(
  'lyric_comment',
  async (
    { id, limit, offset }: { id: string; limit: number; offset: number },
    { dispatch }
  ) => {
    getLyricCommentApi({ id, limit, offset })
      .then((res) => {
        dispatch(changeCommentListAction(res))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
interface SongDetailType {
  hotSongList: any[]
  hotSongListTable: any[]
  songDetail: any
  commentList: CommentListType
}
const initialState: SongDetailType = {
  hotSongList: [],
  hotSongListTable: [],
  songDetail: {},
  commentList: {} as CommentListType
}
const songDetailSlice = createSlice({
  name: 'songDetail',
  initialState,
  reducers: {
    changeHotSongListAction(state, { payload }) {
      state.hotSongList = payload
      console.log(state.hotSongList)
    },
    changeHotSongListTableAction(state, { payload }) {
      state.hotSongListTable = payload
    },
    changeSongDetailAction(state, { payload }) {
      state.songDetail = payload
    },
    changeCommentListAction(state, { payload }) {
      state.commentList = payload
    }
  }
})
export const {
  changeHotSongListAction,
  changeHotSongListTableAction,
  changeSongDetailAction,
  changeCommentListAction
} = songDetailSlice.actions

export default songDetailSlice.reducer
