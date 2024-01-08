import styled from 'styled-components'

export const RecommendRadioWrapper = styled.div`
  padding: 30px 40px 30px 40px;
  display: flex;
  justify-content: space-between;
`

export const RadioLeft = styled.div`
  width: 45%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .list {
    padding: 0;
    list-style: none;
    border: 1px solid #e2e2e2;
    border-top: 2px solid #c20c0c;
    li {
      padding: 5px 10px;

      height: 60px;
    }
    .item {
      &:nth-child(2n) {
        background-color: #f7f7f7;
      }
      &:hover {
        background-color: #eeeeee;
      }
    }
    .radio_item {
      height: 100%;
      display: flex;
      align-items: center;
      .img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        width: 68%;
        .title {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
        .radio_source {
          cursor: pointer;

          color: #a59999;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .source {
      padding: 3px 3px;
      flex: 1;
      border: 1px solid #a59999;
      color: #a59999;
    }
  }
`
export const RadioRight = styled.div`
  width: 45%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .list {
    padding: 0;
    list-style: none;
    border: 1px solid #e2e2e2;
    border-top: 2px solid #c20c0c;
    li {
      height: 60px;
      padding: 5px 10px;
    }
    .item {
      &:nth-child(2n) {
        background-color: #f7f7f7;
      }
      &:hover {
        background-color: #eeeeee;
      }
    }
    .radio_item {
      height: 100%;
      display: flex;
      align-items: center;
      .img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .content {
        width: 55%;
        .title {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
        .radio_source {
          cursor: pointer;
          color: #a59999;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .source {
      padding: 3px 3px;
      flex: 1;
      border: 1px solid #a59999;
      color: #a59999;
    }
  }
`
