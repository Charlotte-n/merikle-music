import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  LoginBottom,
  LoginTop,
  LoginWrapper
} from '@/views/discover/c-pages/recommend/c-cpns/Login/style'
import { Modal } from 'antd'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <LoginWrapper>
      <div className="login_content">
        <div className="dec">
          登录网易云音乐,可以享受无限收藏的乐趣,并且无线同步到手机
        </div>
        <div className="login">
          <button className="button" onClick={showModal}>
            用户登录
          </button>
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
                <img src="" alt="" />
                <div>
                  <span>使用</span>
                  <a href="/">网易云音乐APP</a>
                  <span>扫码登录</span>
                </div>
              </div>
            </LoginTop>
            <LoginBottom>
              <div className="bottom">
                <button className="other">选择其他登录模式</button>
              </div>
            </LoginBottom>
          </Modal>
        </div>
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
