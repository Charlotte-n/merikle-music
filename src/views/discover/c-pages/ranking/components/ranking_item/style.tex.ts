import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
  .main_title {
    padding: 0 15px 10px 15px;
    font-weight: 540;
    font-size: 14px;
  }
  .item {
    padding: 15px 20px 5px 20px;
    display: flex;
    cursor: pointer;
    .img {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item_title {
      margin-left: 10px;
      .sub_title {
        font-size: 13px;
        font-weight: 540;
        width: 100px;
      }
      .update_time {
        margin-top: 7px;
        font-size: 13px;
        color: #999999;
      }
    }

    &:hover {
      background-color: #e6e6e6;
    }
  }
`
