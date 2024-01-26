import styled from 'styled-components'

export const NewsItemWrapper = styled.div`
  .newsitem {
    width: 200px;
    height: 100px;
    margin: auto;
    .image {
      position: relative;
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
      .cover {
        position: absolute;
        width: 118px;
        height: 100px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: 0 -570px;
        text-indent: -9999px;
      }
    }
    .title {
      margin-top: 10px;
      width: 118px;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        text-decoration: underline black;
      }
    }
  }
`
