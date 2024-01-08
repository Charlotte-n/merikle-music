import styled from 'styled-components'

export const SimilarPlayListWrapper = styled.div`
  header {
    padding-bottom: 5px;
    border-bottom: 1px solid #cccccc;
    font-weight: 600;
  }
  main {
    display: flex;
    flex-direction: column;
    .playlist_item {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        img {
          //width: 100%;
          height: 100%;
        }
      }
      .title {
        width: 150px;
        .playlist_title {
          margin-bottom: 10px;
          font-size: 13px;
          font-weight: 540;
        }
        .author {
          span {
            color: #9999a6;
            margin-right: 10px;
          }
          color: #66666b;
        }
      }
    }
  }
`
