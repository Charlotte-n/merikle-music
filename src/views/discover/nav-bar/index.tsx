import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'
import { NavBarHeader } from '@/views/discover/nav-bar/style'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavBarHeader>
      <div className="header wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <NavLink to={item.link} key={item.link}>
              {item.title}
            </NavLink>
          )
        })}
      </div>
    </NavBarHeader>
  )
}

export default memo(NavBar)
