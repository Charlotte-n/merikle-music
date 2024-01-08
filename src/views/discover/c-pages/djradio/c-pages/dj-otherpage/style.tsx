import styled from 'styled-components'

export const DjOtherPageWrapper = styled.div`
  .good_dj {
    header {
      padding-bottom: 8px;
      border-bottom: 2px solid #c10c0c;
      font-size: 25px;
    }
    main {
      display: flex;
      .item {
        margin-right: 57px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        &:last-child {
          margin-right: 0;
        }
        .img {
          width: 150px;
          height: 150px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          margin-top: 10px;
          font-size: 14px;
          .main_title {
          }
          .sub_title {
            margin-top: 5px;
            font-size: 12px;
            color: #666666;
          }
        }
      }
    }
  }
  .dj_ranking {
    header {
      padding-bottom: 8px;
      border-bottom: 2px solid #c10c0c;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 25px;
      .filter {
        font-size: 14px;
        color: #c7c7d2;
        & span {
          padding: 0 10px;
          border-right: 1px solid #c7c7d2;
          &:last-child {
            border-right: 0;
            padding-right: 0;
          }
          a {
            color: #666666;
            font-size: 13px;
          }
        }
      }
    }
    main {
      display: flex;
      flex-wrap: wrap;
      .djRankingContent {
        margin-top: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #c7c7d2;
        width: 46%;
        margin-right: 68px;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
`

export const PagiationWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`
