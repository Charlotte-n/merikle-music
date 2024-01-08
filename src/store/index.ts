import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@/store/modules/counter'
import recommendReducer from '@/views/discover/c-pages/recommend/store/index'
import playerSlice from '@/views/player/store/index'
import {
  shallowEqual,
  TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux'
import songDetailSlice from '@/views/song_detail/store/index'
import albumsSongListSlice from '@/views/discover/c-pages/albums/store/index'
import SongRankingSlice from '@/views/discover/c-pages/ranking/store/index'
import DjRadioSlice from '@/views/discover/c-pages/djradio/store/index'
import SingersSlice from '@/views/discover/c-pages/singers/store/index'
import AlbumsSlice from '@/views/discover/c-pages/songs/store/index'
import AppHeaderSlice from '@/components/app-header/store/index'
import LyricDetailSlice from '@/views/lyric-detail/store/index'
import SingleSingerDetailSlice from '@/views/singers-list/store/index'
//一些仓库片段
const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendReducer,
    player: playerSlice,
    songDetail: songDetailSlice,
    albumsSongList: albumsSongListSlice,
    songRankingSlice: SongRankingSlice,
    DjRadioSlice: DjRadioSlice,
    SingersSlice: SingersSlice,
    AlbumsSlice: AlbumsSlice,
    AppHeaderSlice: AppHeaderSlice,
    LyricDetailSlice: LyricDetailSlice,
    SingleSingerDetailSlice: SingleSingerDetailSlice
  }
})
// const state = store.getState()
// type StateType = typeof state
//给hook添加类型
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: (changeMessage: any) => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
export default store
