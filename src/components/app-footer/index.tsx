import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FooterWrapper } from '@/components/app-footer/style'
import { footerLinks } from '@/assets/data/local_data'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper className={'wrap-v1'}>
      <ul>
        {footerLinks.map((item: any, index: number) => {
          return (
            <li key={item.title} className="item-list">
              <a href={item.link}>{item.title}</a>
            </li>
          )
        })}
      </ul>
      <div className={'feedback'}>
        <span>廉正举报</span>
        <span>不良信息举报邮箱:3495314473@qq.com</span>
        <span>客服热线:95163298</span>
      </div>
      <div className={'permission'}>
        互联网宗教信息服务许可证:浙(2022)000120增值电信业务经营许可证:浙B2-20150198粤B2-20090191-18工业和信息化部备案管理系统网站
      </div>
      <div className={'right'}>
        <span>尹孟佳版权所有01997-2023</span>
        <span>杭州乐读科技有限公司运营:浙网文[2021]1186-054号</span>
        <span>浙公网安备33010902002564号</span>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
