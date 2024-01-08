import styled from 'styled-components'

export const RankingDetailTopWrapper = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  .img {
    margin-right: 20px;
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ranking_detail_right {
    .title {
      margin-bottom: 15px;
      font-size: 18px;
    }
    .update_time {
      margin-bottom: 30px;
      color: #666666;
    }
  }
`
export const OperationWrapper = styled.div`
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
`
