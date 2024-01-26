import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  getPhoneCode,
  PhoneLoginAxios,
  verifyPhoneCode
} from '@/views/discover/c-pages/recommend/services'
import {
  PhoneCodeBottom,
  PhoneCodeTop,
  PhoneCodeWrapper
} from '@/views/discover/c-pages/recommend/c-cpns/Login/style'
import { Button, ConfigProvider, Input, Modal, Select, Space } from 'antd'
import { verifyPhoneRule } from '@/utils/verify-phone'
import { useAppSelector } from '@/store'
import {
  changeModelOpenAction,
  changePhoneModelOpenAction,
  changePhoneNumber,
  changePhonePassWordAction
} from '@/views/discover/c-pages/recommend/c-cpns/Login/store'
import { useDispatch } from 'react-redux'
import CountDown from '@/components/count-down'
import PassByLogin from '@/views/discover/c-pages/recommend/c-cpns/Login/c-components/passby-login'

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
const PhoneCodeLogin: FC<IProps> = () => {
  const dispatch = useDispatch()
  const { phoneNumber, isPhoneModelOpen } = useAppSelector((state) => {
    return {
      phoneNumber: state.LoginStore.phoneNumber,
      isPhoneModelOpen: state.LoginStore.isPhoneModelOpen
    }
  })
  const [verifyCode, setVerifyCode] = useState('')
  const [phoneCodeRule, setPhoneCodeRule] = useState(true)
  const [phoneRule, setPhoneRule] = useState(true)
  const [toggle, setToggle] = useState(false)
  //获取到孩子的倒计时时间
  const getTime = (value: number) => {
    if (value == 0) {
      setToggle(false)
    }
  }

  const Footer = () => {
    const ScanCodeLogin = () => {
      dispatch(changeModelOpenAction(true))
      dispatch(changePhoneModelOpenAction(false))
    }
    return (
      <PhoneCodeBottom>
        <span onClick={() => ScanCodeLogin()}>&lt;&nbsp;其他登录方式</span>
      </PhoneCodeBottom>
    )
  }
  //检验验证码
  const verifyCodeRule = async (num: string) => {
    //校验验证码是否正确
    const res = await verifyPhoneCode(phoneNumber, verifyCode)
    if (num.length !== 4 || res.code !== 200) {
      setPhoneCodeRule(false)
    } else {
      setPhoneCodeRule(true)
    }
  }
  //获取验证码
  const getPhoneCodeApi = async () => {
    const res = verifyPhoneRule(phoneNumber)
    setPhoneRule(res)
    //设置
    if (phoneRule) {
      await getPhoneCode(phoneNumber)
      setToggle(true)
    } else {
      setToggle(false)
    }
  }
  //获取到用户填写的验证码
  const getVerifyCode = (e: any) => {
    setVerifyCode(e.target.value)
  }
  const verifyCodeLogin = async () => {
    //进行表单校验
    const res = verifyPhoneRule(phoneNumber)
    setPhoneRule(res)
    await verifyCodeRule(verifyCode)
    if (phoneRule && phoneCodeRule) {
      //发送请求进行登录
      const res = await PhoneLoginAxios({
        phone: phoneNumber,
        captcha: verifyCode
      })
    }
  }
  const handleOk = () => {
    dispatch(changePhoneModelOpenAction(false))
    setVerifyCode('')
  }
  const handleCancel = () => {
    dispatch(changePhoneModelOpenAction(false))
    setVerifyCode('')
  }
  const passwordLogin = () => {
    dispatch(changePhonePassWordAction(true))
    dispatch(changePhoneModelOpenAction(false))
  }
  //手机号登录

  return (
    <PhoneCodeWrapper>
      <Modal
        open={isPhoneModelOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="手机号登录"
        footer={<Footer />}
        className={'phone_Model'}
      >
        <PhoneCodeTop>
          <Space
            direction={'vertical'}
            style={{ width: '100%' }}
            size={'small'}
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
                placeholder={'请输入短信验证码'}
                value={verifyCode}
                onChange={(e) => getVerifyCode(e)}
              ></Input>
              <ConfigProvider
                theme={{
                  token: {
                    colorBgContainer: '#FF3A3A',
                    colorPrimaryActive: '#FF3A3A'
                  }
                }}
              >
                {toggle ? (
                  <CountDown getTime={getTime}></CountDown>
                ) : (
                  <Button
                    style={{
                      color: 'white',
                      borderRadius: '20px'
                    }}
                    onClick={async () => {
                      await getPhoneCodeApi()
                    }}
                  >
                    获取验证码
                  </Button>
                )}
              </ConfigProvider>
            </Space>
            <div
              style={{
                color: 'red',
                textAlign: 'left',
                paddingLeft: '50px',
                fontSize: '13px',
                display: phoneCodeRule ? 'none' : 'block'
              }}
            >
              输入的验证码不正确
            </div>
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
                  onClick={() => verifyCodeLogin()}
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
              onClick={() => passwordLogin()}
            >
              密码登录
            </div>
            <PassByLogin></PassByLogin>
          </Space>
        </PhoneCodeTop>
      </Modal>
    </PhoneCodeWrapper>
  )
}

export default memo(PhoneCodeLogin)
