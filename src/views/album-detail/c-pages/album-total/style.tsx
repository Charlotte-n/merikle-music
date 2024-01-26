import styled from 'styled-components'

export const AlbumTotalWrapper = styled.div`
  .album_overview {
    display: flex;
    img {
      margin-right: 15px;
      width: 150px;
      height: 150px;
    }
    .album_view {
      .title {
        margin-bottom: 5px;
        color: black;
        font-size: 18px;
        display: flex;
        align-items: center;
        span {
          &:first-child {
            display: inline-block;
            width: 54px;
            height: 22px;
            background-position: 0 -187px;
          }
        }
      }
      ul {
        margin: 0;
        padding: 0;
        color: #666666;
        line-height: 1.7;
        list-style: none;
        li {
          span {
            &:first-child {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
  .album_desc {
    margin-top: 20px;
    line-height: 1.5;
  }
`
