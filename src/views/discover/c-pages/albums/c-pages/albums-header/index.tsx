import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {
  AlbumsCategoryWrapper,
  AlbumsHeaderWrapper
} from '@/views/discover/c-pages/albums/c-pages/albums-header/style'
import {
  Button,
  ConfigProvider,
  Dropdown,
  MenuProps,
  message,
  Space
} from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { useAppSelector } from '@/store'
import { Categories } from '@/views/discover/c-pages/albums/services/type'

interface IProps {
  children?: ReactNode
  getHeaderCategory: (val: string) => void
}

const AlbumsHeader: FC<IProps> = (props) => {
  const { getHeaderCategory } = props
  const { AlbumsAllTags, AlbumsShortTag } = useAppSelector((state) => {
    return {
      AlbumsAllTags: state.albumsSongList.albumsCategory,
      AlbumsShortTag: state.albumsSongList.categoryList
    }
  })
  const handleHeaderCategory = (val: string) => {
    getHeaderCategory(val)
  }
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
  }
  const items: MenuProps['items'] = [
    {
      label: (
        <AlbumsCategoryWrapper>
          <header>
            <span>全部风格</span>
          </header>
          <main>
            {Object.keys(AlbumsShortTag).map((item1, index) => {
              return (
                <dl key={index}>
                  <dt>{(AlbumsShortTag as any)[item1]}</dt>
                  <div className="all">
                    {AlbumsAllTags.map((item2, index) => {
                      if (String(item2.category) === item1) {
                        return (
                          <dd
                            key={index}
                            onClick={() => handleHeaderCategory(item2.name)}
                          >
                            {item2.name}
                          </dd>
                        )
                      }
                    })}
                  </div>
                </dl>
              )
            })}
          </main>
        </AlbumsCategoryWrapper>
      ),
      key: '4',
      danger: true,
      disabled: true
    }
  ]

  const menuProps = {
    items,
    onClick: handleMenuClick
  }

  return (
    <AlbumsHeaderWrapper>
      <div className="albums_left">
        <h2>全部</h2>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              选择分类
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="albums_right">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultBorderColor: '#ffffff',
                groupBorderColor: '#ffffff'
              }
            }
          }}
        >
          <button className="hot_button">热门</button>
        </ConfigProvider>
      </div>
    </AlbumsHeaderWrapper>
  )
}

export default memo(AlbumsHeader)
