import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProfile } from '@/views/discover/c-pages/recommend/c-cpns/Login/apis'
import store from '@/store'
//获取用户信息
export const fetchUserProfile = createAsyncThunk(
  'profile',
  async (arg, { dispatch }) => {
    const uid = store.getState().LoginStore.userInfo.userId
    const res = await getProfile(String(uid))
    dispatch(changeProfile(res.profile))
  }
)
interface userInfoType {
  userId: number
  cookie: string
}
interface initialStateType {
  isModelOpen: boolean
  isPhoneModelOpen: boolean
  phoneNumber: string
  isPhonePassWordOpen: boolean
  userInfo: userInfoType
  profile: any
}
const initialState: initialStateType = {
  isModelOpen: false,
  isPhoneModelOpen: false,
  isPhonePassWordOpen: false,
  phoneNumber: '',
  userInfo: {} as userInfoType,
  profile: {}
}
const LoginStore = createSlice({
  name: 'login-common',
  initialState,
  reducers: {
    changeModelOpenAction(state, { payload }) {
      state.isModelOpen = payload
    },
    changePhoneModelOpenAction(state, { payload }) {
      if (payload === false) {
        state.phoneNumber = ''
      }
      state.isPhoneModelOpen = payload
    },
    changePhoneNumber(state, { payload }) {
      if (payload === false) {
        state.phoneNumber = ''
      }
      state.phoneNumber = payload
    },
    changePhonePassWordAction(state, { payload }) {
      state.isPhonePassWordOpen = payload
    },
    changeUserInfoAction(state, { payload }) {
      state.userInfo = payload
    },
    changeProfile(state, { payload }) {
      state.profile = payload
      console.log(payload)
    }
  }
})
export const {
  changeModelOpenAction,
  changePhoneModelOpenAction,
  changePhoneNumber,
  changePhonePassWordAction,
  changeUserInfoAction,
  changeProfile
} = LoginStore.actions

export default LoginStore.reducer
