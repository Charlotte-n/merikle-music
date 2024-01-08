import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/views/discover/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      {/*导航栏目*/}
      <NavBar></NavBar>
      {/*子路由展示的内容*/}
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
