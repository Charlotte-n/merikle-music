import styled from 'styled-components'

export const SongsMenuWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  .song_content {
    font-size: 15px;
    .img {
      position: relative;
      width: 150px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
      }
      .mask {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        bottom: 0;
        opacity: 0.7;
        width: 100%;
        height: 28px;
        background-color: black;
        .number {
          padding-left: 8px;
          font-size: 14px;
        }
        .erji {
          padding-right: 3px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }
        .play {
          padding-right: 8px;
          display: inline-block;
          width: 17px;
          height: 16px;
          background-position: 0 0;
        }
        .number {
          color: white;
        }
      }
    }
    .title {
      width: 150px;
      margin-top: 10px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
