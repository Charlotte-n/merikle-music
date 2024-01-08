import styled from 'styled-components'
export const SongListDescriptionWrapper = styled.div`
  width: 100%;
  .song_title {
    display: flex;
    align-items: center;
    font-size: 18px;
    .playsong_list {
      margin-right: 10px;
      display: inline-block;
      width: 52px;
      height: 23px;
      background-position: 0 -244px;
    }
    span {
      width: 320px;
    }
  }
  .song_author {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .author {
      margin-right: 10px;
      color: #c9a2c2;
    }
    .time {
      span {
        margin-right: 5px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .song_operate {
    margin-top: 10px;
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
  .song_tag {
    margin-top: 20px;
    .tags {
      margin-right: 3px;
    }
  }
  .song_introduction {
    margin-top: 20px;
    line-height: 1.5;
    font-size: 13px;
    > span:first-child {
      margin-right: 2px;
    }
  }
`
