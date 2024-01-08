import styled from 'styled-components'

export const SimilarSongWrapper = styled.div`
  header {
    padding-bottom: 5px;
    border-bottom: 1px solid #cccccc;
    font-weight: 600;
  }
  main {
    .song_item {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .left {
        line-height: 1.5;
        .song_name {
          width: 150px;
        }
        .singer {
          color: #cccccc;
          width: 150px;
        }
      }
      .right {
        display: flex;
        .play {
          margin-right: 10px;
          width: 20px;
          height: 20px;
          background-position: -61px -452px;
        }
        .add {
          width: 20px;
          height: 20px;
          background-position: -82px -452px;
        }
      }
    }
  }
`
