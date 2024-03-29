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
import { getAlbumComment, getAlbumsDetail } from '@/views/album-detail/services'

//异步请求
//获取专辑里面的歌单
export const fetchAlbumDetailSongListAction = createAsyncThunk(
  'album_detail_song',
  (id: number | string, { dispatch }) => {
    getAlbumsDetail(id)
      .then((res) => {
        dispatch(changeHotSongListTableAction(res.songs))
      })
      .catch((error) => {
        console.log(error, '出错了')
      })
  }
)
//获取专辑评论
export const fetchAlbumCommentAction = createAsyncThunk(
  'album_comment',
  (result: { id: number | string; offset: any }, { dispatch }) => {
    getAlbumComment(result.id)
      .then((res) => {
        dispatch(changeCommentListAction(res))
      })
      .catch((error) => {
        console.log(error, '未知错误')
      })
  }
)
export const fetchHotSongListDataAction = createAsyncThunk(
  'hot_song_list',
  async (id: string | number, { dispatch }) => {
    //获取热门歌单
    dispatch(changeImageLoading(true))
    dispatch(changeTableLoading(true))
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
        console.log(res)
        dispatch(changeHotSongListTableAction([...new Set(res.songs)]))
        dispatch(changeTableLoading(false))
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
  imageLoading: boolean
  tableLoading: boolean
}
const initialState: SongDetailType = {
  hotSongList: [],
  hotSongListTable: [],
  songDetail: {},
  commentList: {} as CommentListType,
  imageLoading: true,
  tableLoading: true
}
const songDetailSlice = createSlice({
  name: 'songDetail',
  initialState,
  reducers: {
    changeHotSongListAction(state, { payload }) {
      state.hotSongList = payload
    },
    changeHotSongListTableAction(state, { payload }) {
      state.hotSongListTable = []
      const res = new Set(payload)
      state.hotSongListTable = [...res]
    },
    changeSongDetailAction(state, { payload }) {
      state.songDetail = {}
      state.songDetail = payload
    },
    changeCommentListAction(state, { payload }) {
      state.commentList = payload
    },
    changeImageLoading(state, { payload }) {
      state.imageLoading = payload
    },
    changeTableLoading(state, { payload }) {
      state.tableLoading = payload
    }
  }
})
export const {
  changeHotSongListAction,
  changeHotSongListTableAction,
  changeSongDetailAction,
  changeCommentListAction,
  changeImageLoading,
  changeTableLoading
} = songDetailSlice.actions

export default songDetailSlice.reducer
