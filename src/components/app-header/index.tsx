import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
// import { Link } from 'react-router-dom'
// import routes from '@/router'
import '../../assets/css/index.scss'
import header_titles from '@/assets/data/header_title.json'
import {
  HeaderLeft,
  HeaderRight,
  HeaderWapper,
  SearchWrapper
} from '@/components/app-header/style'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom'
import { Dropdown, Input, MenuProps, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchSearchSingleSongAction } from '@/components/app-header/store'
//@ts-ignore
import { debounce } from 'lodash'

interface IProps {
  children?: ReactNode
}
enum searchType {
  single = 1,
  singer = 100,
  albums = 10,
  songs = 1000
}

const AppHeader: FC<IProps> = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  //#region获取数据
  //@ts-ignore
  const dispatch = useAppDispatch()
  const handleSearchChange = debounce((e: any) => {
    doSomething(e.target.value)
    setText(e.target.value)
  }, 500)
  const {
    singleSong,
    singer,
    albums,
    songslist
  }: { singleSong: any[]; singer: any; albums: any; songslist: any } =
    useAppSelector((state) => {
      return {
        singleSong: state.AppHeaderSlice.singleSong,
        singer: state.AppHeaderSlice.singer,
        albums: state.AppHeaderSlice.albums,
        songslist: state.AppHeaderSlice.songs
      }
    }, shallowEqualApp)
  //endregion
  const handleToSongDetail = (ids: string) => {
    navigate(`/lyric/detail?ids=${ids}`)
  }
  //#region 下拉窗
  const doSomething = (value: string) => {
    dispatch(
      fetchSearchSingleSongAction({
        keywords: value,
        type: searchType.single
      })
    )
    dispatch(
      fetchSearchSingleSongAction({
        keywords: value,
        type: searchType.singer
      })
    )
    dispatch(
      fetchSearchSingleSongAction({
        keywords: value,
        type: searchType.albums
      })
    )
    dispatch(
      fetchSearchSingleSongAction({
        keywords: value,
        type: searchType.songs
      })
    )
  }
  //下拉弹窗的内容
  const items: MenuProps['items'] = [
    {
      label:
        text === '' ? (
          <>我是空的</>
        ) : (
          <SearchWrapper>
            <header>
              <span>搜索</span>
            </header>
            <main>
              <div className={'item'}>
                <div className={'left'}>单曲</div>
                <div className={'right'}>
                  {singleSong?.slice(0, 4).map((item: any, index: number) => {
                    return (
                      <div
                        key={item.id}
                        className={'right_item'}
                        onClick={() => handleToSongDetail(item.id)}
                      >
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={'item'}>
                <div className={'left'}>歌手</div>
                <div className={'right'}>
                  {singer?.slice(0, 4).map((item: any, index: number) => {
                    return (
                      <div key={item.id} className={'right_item'}>
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={'item'}>
                <div className={'left'}>专辑</div>
                <div className={'right'}>
                  {albums?.slice(0, 4).map((item: any, index: number) => {
                    return (
                      <div key={item.id} className={'right_item'}>
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={'item'}>
                <div className={'left'}>歌单</div>
                <div className={'right'}>
                  {songslist?.slice(0, 4).map((item: any, index: number) => {
                    return (
                      <div key={item.id} className={'right_item'}>
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </main>
          </SearchWrapper>
        ),
      key: '4',
      danger: true,
      disabled: true
    }
  ]

  const menuProps = {
    items
  }
  //endregion
  useEffect(() => {
    return () => {}
  }, [singer])

  function showItem(item: any) {
    if (item.path === 'link') {
      return (
        <NavLink to={item.path}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <NavLink to={item.path}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    }
  }
  return (
    <div>
      <HeaderWapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="" className="logo sprite_01">
              网易云音乐
            </a>
            <div className="nav">
              {header_titles.map((item) => {
                return <div key={item.title}>{showItem(item)}</div>
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <div>
              <Dropdown menu={menuProps}>
                <Input
                  className="search"
                  placeholder="音乐/视频/电台/用户"
                  prefix={<SearchOutlined />}
                  onChange={handleSearchChange}
                />
              </Dropdown>
            </div>
            <div className="create">创作者中心</div>
            <div className="login">登录</div>
          </HeaderRight>
        </div>
        <div className="diver"></div>
      </HeaderWapper>
    </div>
  )
}

export default memo(AppHeader)
