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
import AlbumDetailSlice from '@/views/album-detail/store/index'
import LoginStore from '@/views/discover/c-pages/recommend/c-cpns/Login/store/index'
import CommonStore from '@/store/modules/common'
//持久化
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'userInfo',
  storage,
  whitelist: ['userInfo', 'profile']
}
const DjPersistConfig = {
  key: 'djradio',
  storage
}
const SingersPersistConfig = {
  key: 'singers',
  storage
}
const LoginStorePersist = persistReducer(persistConfig, LoginStore)
const DjRadioStorePersist = persistReducer(DjPersistConfig, DjRadioSlice)
const SingersStorePersist = persistReducer(SingersPersistConfig, SingersSlice)

//一些仓库片段
const store = configureStore({
  reducer: {
    counter: counterSlice,
    recommend: recommendReducer,
    player: playerSlice,
    songDetail: songDetailSlice,
    albumsSongList: albumsSongListSlice,
    songRankingSlice: SongRankingSlice,
    DjRadioSlice: DjRadioStorePersist,
    SingersSlice: SingersStorePersist,
    AlbumsSlice: AlbumsSlice,
    AppHeaderSlice: AppHeaderSlice,
    LyricDetailSlice: LyricDetailSlice,
    SingleSingerDetailSlice: SingleSingerDetailSlice,
    AlbumDetailSlice: AlbumDetailSlice,
    LoginStore: LoginStorePersist,
    CommonStore: CommonStore
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

//给hook添加类型

export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const shallowEqualApp = shallowEqual
export default store
export const persistor = persistStore(store)
