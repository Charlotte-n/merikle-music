import { Navigate, RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'
import LyricDetailPage from '@/views/lyric-detail'
const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
const Mine = lazy(() => import('@/views/mine'))
const Recommend = lazy(() => import('@/views/discover/c-pages/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-pages/ranking'))
const Songs = lazy(() => import('@/views/discover/c-pages/songs'))
const Singers = lazy(() => import('@/views/discover/c-pages/singers'))
const Djradio = lazy(() => import('@/views/discover/c-pages/djradio'))
const Albums = lazy(() => import('@/views/discover/c-pages/albums'))
const SongDetail = lazy(() => import('@/views/song_detail/index'))
const SingerList = lazy(() => import('@/views/singers-list/index'))
const MoreSongList = lazy(
  () => import('@/views/singers-list/c-pages/more-songlist/index')
)
const SingerDetail = lazy(() => import('@/views/singer-detail/index'))
const AlbumDetail = lazy(() => import('@/views/album-detail/index'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover/recommend"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/singers',
        element: <Singers />
      },
      {
        path: '/discover/albums',
        element: <Albums />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/song',
    element: <SongDetail />
  },
  {
    path: '/lyric/detail',
    element: <LyricDetailPage></LyricDetailPage>
  },
  {
    path: '/singer/list',
    element: <SingerList></SingerList>
  },
  {
    path: '/more/singerlist',
    element: <MoreSongList></MoreSongList>
  },
  {
    path: '/singer/detail',
    element: <SingerDetail></SingerDetail>
  },
  {
    path: '/album/detail',
    element: <AlbumDetail></AlbumDetail>
  }
]

export default routes
