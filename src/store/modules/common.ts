import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface IState {
  loading: boolean
}
const initialState: IState = {
  loading: true
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    //   修改参数
    changeLoading(state, { payload }) {
      state.loading = payload
    }
  }
})
export const { changeLoading } = commonSlice.actions

export default commonSlice.reducer
