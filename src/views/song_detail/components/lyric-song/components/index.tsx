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
        width: 40px;
        height: 40px;
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
