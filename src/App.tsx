import React, { Suspense, useEffect } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import PlayBar from '@/views/player/app-player-bar'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store'
import { FloatButton } from 'antd'
function App() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const dispatch = useAppDispatch()
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
