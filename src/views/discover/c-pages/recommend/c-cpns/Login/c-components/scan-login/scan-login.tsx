import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Modal } from 'antd'
import {
  LoginBottom,
  LoginTop
} from '@/views/discover/c-pages/recommend/c-cpns/Login/style'
import QRCode from 'qrcode.react'
import {
  getLoginCode,
  getLoginKey
} from '@/views/discover/c-pages/recommend/services'
import { useAppSelector } from '@/store'
import {
  changeModelOpenAction,
  changePhoneModelOpenAction
} from '@/views/discover/c-pages/recommend/c-cpns/Login/store'
import { checkCodeStatus } from '@/views/discover/c-pages/recommend/services'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const ScanLogin: FC<IProps> = (props) => {
  const [Code, setCode] = useState('')
  const [key, setKey] = useState('')
  const [id, setId] = useState(1)
  const dispatch = useDispatch()

  //使用仓库里的
  const { isModalOpen } = useAppSelector((state) => {
    return {
      isModalOpen: state.LoginStore.isModelOpen
    }
  })
  const getCode = async () => {
    const res = await getLoginKey()
    setKey(res.data.unikey)
    const rescode = await getLoginCode(key)
    setCode(rescode.data.qrurl)
  }
  const otherLogin = () => {
    dispatch(changeModelOpenAction(false))
    dispatch(changePhoneModelOpenAction(true))
  }
  const handleOk = () => {
    dispatch(changeModelOpenAction(false))
  }
  const handleCancel = () => {
    dispatch(changeModelOpenAction(false))
  }
  useEffect(() => {
    // if(isModalOpen){
    //   await getCode()
    //   const timer: any = setInterval(async () => {
    //     const res = await checkCodeStatus(key)
    //     console.log(res)
    //     //当登录成功的时候
    //     if (res.code == '803') {
    //       //储存cookie到仓库
    //     }
    //     setId(timer)
    //   }, 1000)
    // }
    // return ()=>{
    //   clearInterval(id)
    // }
    console.log(isModalOpen)
  }, [isModalOpen])
  return (
    <div>
      {/*扫码登录*/}
      <Modal
        title="登录"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <LoginTop>
          <div className="left">
            <img
              src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className="scannerCode">扫码登录</div>
            <QRCode value={Code as string}></QRCode>
            <div>
              <span>使用</span>
              <a href="/public">网易云音乐APP</a>
              <span>扫码登录</span>
            </div>
          </div>
        </LoginTop>
        <LoginBottom>
          <div className="bottom">
            {/*切换到手机验证码登录*/}
            <button className="other" onClick={() => otherLogin()}>
              选择其他登录模式
            </button>
          </div>
        </LoginBottom>
      </Modal>
    </div>
  )
}

export default memo(ScanLogin)
