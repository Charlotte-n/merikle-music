import styled from 'styled-components'
export const RankingItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 10px;
  width: 230px;
  &:last-child {
    width: 280px;
  }
  }

  .pic-recommend {
    position: absolute;
    display: flex;
    left: 10px;
    width: 230px;
    height: 230px;
    img {
      margin-right: 10px;
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    .title {
      font-size: 16px;
      .main_title {
        cursor: pointer;
        &:hover {
          text-decoration: underline black;
        }
      }
      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        cursor: pointer;
        text-indent: -999px;
        margin: 8px 10px 0 0;
      }
      .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }
      .favor {
        background-position: -300px -205px;

        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  .list {
    font-size: 13px;
    .list_item {
      position: relative;
      top: 113px;
      left: 30px;
      display: flex;
      align-items: center;
      height: 32px;
      &:nth-child(-n + 3) .index {
        color: darkred;
      }
      .content {
        display: flex;
        width: 130px;
        .index {
          margin-right: 10px;
        }
        .list_title {
          width: 80px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
            text-decoration-color: black;
          }
        }
      }
      .operate {
        position: relative;
        right: 1px;
        display: flex;
        display: none;
        .btn {
          margin-right: 3px;
          width: 17px;
          height: 17px;
        }
        .play {
          background-position: -267px -268px;
        }
        .add {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }
        .fover {
          background-position: -297px -268px;
        }
      }
      &:hover {
        .operate {
          display: block;
        }
      }
    }
    .all {
      position: absolute;
      bottom: -138px;
      right: 70px;
      span{
        cursor: pointer;
        &:hover{
          text-decoration: underline black;
        }
    }
  }
`
