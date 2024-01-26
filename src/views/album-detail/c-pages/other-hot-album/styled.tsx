import styled from 'styled-components'

export const HotAlbumListWrapper = styled.div`
  margin-top: 50px;
`

export const HotAlbumListHeader = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid #cccccc;
  font-weight: 600;
`

export const HotAlbumListContent = styled.div`
  margin-top: 10px;
  .hotSongItem {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .pic {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      margin-left: 8px;
      .title {
        width: 180px;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
`
