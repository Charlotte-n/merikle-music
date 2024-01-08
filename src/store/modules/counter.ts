import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface IState {
  count: number
  message: string
  direction: 'left' | 'right' | 'top' | 'bottom'
}
const initialState: IState = {
  count: 100,
  message: 'Hello React',
  direction: 'left'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //   修改参数
    changeMessage(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

//将这个修改的函数导出出去
export const { changeMessage } = counterSlice.actions

export default counterSlice.reducer
