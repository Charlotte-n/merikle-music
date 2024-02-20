import React, { Suspense, useEffect } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import PlayBar from '@/views/player/app-player-bar'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store'
import { FloatButton, Spin } from 'antd'
import CommonStore from '@/store/modules/common'
function App() {
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => {
    return {
      loading: state.CommonStore.loading
    }
  })
  useEffect(() => {
    dispatch(fetchCurrentSongAction('1842025914'))
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader></AppHeader>

        {/*子路由的显示内容*/}
        <Suspense fallback="">
          <div className="main" style={{ minHeight: '100vh' }}>
            {useRoutes(routes)}
          </div>
        </Suspense>

        <FloatButton.BackTop shape={'square'} description={<div>Top</div>} />
        <AppFooter></AppFooter>
        <PlayBar></PlayBar>
      </ThemeProvider>
    </div>
  )
}

export default App
