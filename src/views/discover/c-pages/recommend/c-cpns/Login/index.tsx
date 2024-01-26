import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginWrapper } from '@/views/discover/c-pages/recommend/c-cpns/Login/style'

import ScanLogin from '@/views/discover/c-pages/recommend/c-cpns/Login/c-components/scan-login/scan-login'
import { changeModelOpenAction } from '@/views/discover/c-pages/recommend/c-cpns/Login/store'
import { useAppSelector } from '@/store'
import PhoneCodeLogin from '@/views/discover/c-pages/recommend/c-cpns/Login/c-components/phone-code'
import PhonePasswordLogin from '@/views/discover/c-pages/recommend/c-cpns/Login/c-components/phone-password'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const dispatch = useDispatch()
  const { isModalOpen, isPhoneModelOpen, isPhonePassWordOpen } = useAppSelector(
    (state) => {
      return {
        isModalOpen: state.LoginStore.isModelOpen,
        isPhoneModelOpen: state.LoginStore.isPhoneModelOpen,
        isPhonePassWordOpen: state.LoginStore.isPhonePassWordOpen
      }
    }
  )
  const showModal = async () => {
    dispatch(changeModelOpenAction(true))
    console.log(isModalOpen)
  }

  //获取二维码
  useEffect(() => {}, [])
  return (
    <LoginWrapper>
      <div className="login_content">
        <div className="dec">
          登录网易云音乐,可以享受无限收藏的乐趣,并且无线同步到手机
        </div>
        <div className="login">
          <button className="button" onClick={() => showModal()}>
            用户登录
          </button>
        </div>
        {isModalOpen && <ScanLogin></ScanLogin>}
        {isPhoneModelOpen && <PhoneCodeLogin></PhoneCodeLogin>}
        {isPhonePassWordOpen && <PhonePasswordLogin></PhonePasswordLogin>}
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
