import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, ConfigProvider, Input, Modal, Select, Space } from 'antd'
import { verifyPhoneRule } from '@/utils/verify-phone'
import {
  PhoneCodeWrapper,
  PhoneCodeTop,
  PhoneCodeBottom
} from '@/views/discover/c-pages/recommend/c-cpns/Login/style'
import { PhoneLoginAxios } from '@/views/discover/c-pages/recommend/services'
import { useAppSelector } from '@/store'
import {
  changeModelOpenAction,
  changePhoneModelOpenAction,
  changePhoneNumber,
  changePhonePassWordAction
} from '@/views/discover/c-pages/recommend/c-cpns/Login/store'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
}
const options = [
  {
    value: '中国大陆 +86',
    label: '+86'
  },
  {
    value: '巴西 +55',
    label: '+55'
  },
  {
    value: '爱尔兰 +365',
    label: '+365'
  }
]
const PhonePasswordLogin: FC<IProps> = () => {
  const dispatch = useDispatch()
  const { phoneNumber, isPhonePassword } = useAppSelector((state) => {
    return {
      phoneNumber: state.LoginStore.phoneNumber,
      isPhonePassword: state.LoginStore.isPhonePassWordOpen
    }
  })
  const [phoneRule, setPhoneRule] = useState(true)
  const [passWord, setPassWord] = useState('')
  const LoginByPassword = async () => {
    const res = verifyPhoneRule(phoneNumber)
    setPhoneRule(res)
    if (phoneRule) {
      const res = await PhoneLoginAxios({
        phone: phoneNumber,
        password: passWord
      })
      console.log(res)
    }
  }
  const Footer = () => {
    const ScanCodeLogin = () => {
      dispatch(changeModelOpenAction(false))
      dispatch(changePhoneModelOpenAction(false))
    }
    return (
      <PhoneCodeBottom>
        <span onClick={() => ScanCodeLogin()}>&lt;&nbsp;其他登录方式</span>
      </PhoneCodeBottom>
    )
  }
  const PhoneLogin = () => {
    dispatch(changePhonePassWordAction(false))
    dispatch(changePhoneModelOpenAction(true))
  }
  const handleOk = () => {
    dispatch(changePhonePassWordAction(false))
  }
  const handleCancel = () => {
    dispatch(changePhonePassWordAction(false))
  }

  return (
    <PhoneCodeWrapper>
      <Modal
        open={isPhonePassword}
        onOk={handleOk}
        onCancel={handleCancel}
        title="密码登录"
        footer={<Footer />}
        className={'phone_Model'}
      >
        <PhoneCodeTop>
          <Space
            direction={'vertical'}
            style={{ width: '100%' }}
            size={'middle'}
          >
            <Space>
              <Space.Compact className={'compact'} style={{ width: '100%' }}>
                <Select defaultValue="+86" options={options} />
                <Input
                  placeholder={'请输入手机号'}
                  value={phoneNumber}
                  onChange={(e) => {
                    dispatch(changePhoneNumber(e.target.value))
                  }}
                />
              </Space.Compact>
            </Space>
            <div
              style={{
                color: 'red',
                textAlign: 'left',
                paddingLeft: '50px',
                fontSize: '13px',
                display: phoneRule ? 'none' : 'block'
              }}
            >
              输入的手机号不对
            </div>
            <Space>
              <Input
                placeholder={'请输入密码'}
                value={passWord}
                onChange={(e) => {
                  setPassWord(e.target.value)
                }}
              ></Input>
            </Space>
            <Space>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: '#FF3A3A',
                    colorPrimaryActive: '#FF3A3A'
                  }
                }}
              >
                <Button
                  style={{
                    color: 'white',
                    borderRadius: '20px',
                    width: '100%'
                  }}
                  onClick={() => LoginByPassword()}
                >
                  登录
                </Button>
              </ConfigProvider>
            </Space>
          </Space>
          <Space
            style={{
              margin: '30px 0 30px 45px',
              fontSize: '12px',
              color: '#666'
            }}
          >
            <div
              className={'passwordLogin'}
              style={{ cursor: 'pointer' }}
              onClick={() => PhoneLogin()}
            >
              短信登录
            </div>
          </Space>
        </PhoneCodeTop>
      </Modal>
    </PhoneCodeWrapper>
  )
}

export default memo(PhonePasswordLogin)
