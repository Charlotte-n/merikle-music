import styled from 'styled-components'

interface Props {
  showStatus: boolean
}
export const LyricSongsWrapper = styled.div<Props>`
  display: flex;
  margin-bottom: 15px;
  .left {
    text-align: center;
    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .right {
    margin-left: 20px;
    .title {
      display: flex;
      .single_song {
        display: inline-block;
        height: 25px;
        width: 54px;
        background-position: 0 -463px;
      }
      .middle {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        .first {
          font-size: 20px;
        }
        .second {
          font-size: 15px;
          color: #bababa;
        }
      }
      .mv {
        height: 20px;
        width: 22px;
        background-position: 0 -18px;
      }
    }
    .source {
      margin-top: 10px;
      div {
        display: flex;
        align-items: center;
        dl {
          color: #bababa;
        }
        dt {
          padding-left: 10px;
          color: #0c89d4;
        }
      }
    }
    .lyric {
      margin-bottom: 10px;
      white-space: pre-wrap;
      line-height: 2;
      font-size: 12px;
      max-height: 300px;
      overflow: hidden;
    }
    .show {
      cursor: pointer;
      color: #0c73c2;
      &:hover {
        text-decoration: underline;
      }
    }
    .close {
      cursor: pointer;
      color: #0c73c2;
      &:hover {
        text-decoration: underline;
      }
    }
    .active {
      white-space: pre-wrap;
      line-height: 2;
      max-height: 1200px;
      font-size: 12px;
    }
    .operation {
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      > div {
        margin-right: 6px;
      }
      .play {
        display: flex;
        height: 40px;
        .play1 {
          position: relative;
          display: inline-block;
          height: 33px;
          width: 70px;
          background-position: 0 -631px;
          .play_title {
            display: flex;
            position: absolute;
            top: 10px;
            right: 5px;
            color: white;
            font-size: 13px;
          }
        }
        .play2 {
          display: inline-block;
          width: 0px;
          height: 33px;
          background-position: -147px -247px;
        }
        .play3 {
          display: inline-block;
          width: 33px;
          height: 33px;
          overflow: hidden;
          background-position: 0px -1586px;
        }
      }
      .collect {
        height: 37px;
        width: 86px;
        background-position: 0 -1250px;
      }
      .share {
        height: 37px;
        width: 86px;
        background-position: 0 -1250px;
      }
      .download {
        height: 37px;
        width: 86px;
        background-position: 0 -1250px;
      }
      .discuss {
        height: 37px;
        width: 86px;
        background-position: 0 -1250px;
      }
    }
  }
`
