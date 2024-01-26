import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PassByLoginWrapper } from '@/views/discover/c-pages/recommend/c-cpns/Login/c-components/passby-login/style'
import { PassByLoginApi } from '@/views/discover/c-pages/recommend/services'
import { useDispatch } from 'react-redux'
import {
  changeModelOpenAction,
  changePhoneModelOpenAction,
  changePhonePassWordAction,
  changeProfile,
  changeUserInfoAction,
  fetchUserProfile
} from '@/views/discover/c-pages/recommend/c-cpns/Login/store'
import { useAppDispatch, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const PassByLogin: FC<IProps> = () => {
  const { userInfo } = useAppSelector((state) => {
    return {
      userInfo: state.LoginStore.userInfo
    }
  })
  //@ts-ignore
  const dispatch = useAppDispatch()

  //点击获取cookie
  const getCookie = async () => {
    const res = await PassByLoginApi()
    //存储到store里面
    dispatch(
      changeUserInfoAction({
        userId: 7903035697,
        cookie: res.cookie
      })
    )
    //判断是否为登录状态是登录状态
    if (userInfo.userId) {
      //表示登录状态
      dispatch(fetchUserProfile())
      //关闭model
      dispatch(changePhonePassWordAction(false))
      dispatch(changePhoneModelOpenAction(false))
    }
  }
  return (
    <PassByLoginWrapper onClick={() => getCookie()}>
      游客登录
    </PassByLoginWrapper>
  )
}

export default memo(PassByLogin)
