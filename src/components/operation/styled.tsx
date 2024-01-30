import styled from 'styled-components'

export const OperationWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  > div {
    margin-right: 6px;
  }
  .play {
    cursor: pointer;
    display: flex;
    height: 40px;
    .play1 {
      position: relative;
      display: inline-block;
      height: 33px;
      width: 70px;
      background-position: 0 -631px;
      &:hover {
        background-position: -0px -717px;
      }
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
      background-position: 0 -1586px;
      &:hover {
        background-position: -40px -1586px;
      }
    }
  }
  .collect {
    cursor: pointer;

    position: relative;
    height: 37px;
    width: 86px;
    background-position: 0 -1250px;
    .collect-btn {
      position: absolute;
      top: 8px;
      left: 10px;
      display: inline-block;
      height: 15px;
      width: 18px;
      background-position: -20px -173px;
    }
    .title {
      position: absolute;
      top: 9px;
      left: 40px;
      font-size: 13px !important;
    }
  }
  .share {
    cursor: pointer;

    position: relative;
    height: 37px;
    width: 86px;
    background-position: 0 -1250px;
    .share-btn {
      position: absolute;
      top: 8px;
      left: 10px;
      display: inline-block;
      height: 15px;
      width: 18px;
      background-position: -20px -194px;
    }
    .title {
      position: absolute;
      top: 9px;
      left: 40px;
      font-size: 13px !important;
    }
  }
  .download {
    cursor: pointer;

    position: relative;
    height: 37px;
    width: 86px;
    background-position: 0 -1250px;
    .download-btn {
      position: absolute;
      top: 8px;
      left: 10px;
      display: inline-block;
      height: 15px;
      width: 18px;
      background-position: -104px -173px;
    }
    .title {
      position: absolute;
      top: 9px;
      left: 40px;
      font-size: 13px !important;
    }
  }
  .discuss {
    cursor: pointer;
    position: relative;
    height: 37px;
    width: 86px;
    background-position: 0 -1250px;
    .comment-btn {
      position: absolute;
      top: 8px;
      left: 10px;
      display: inline-block;
      height: 14px;
      width: 22px;
      background-position: -64px -248px;
    }
    .title {
      position: absolute;
      top: 9px;
      left: 40px;
      font-size: 13px !important;
    }
  }
`
