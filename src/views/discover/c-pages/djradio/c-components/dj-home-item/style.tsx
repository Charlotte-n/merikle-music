import styled from 'styled-components'

export const DjHomeItemWrapper = styled.div`
  header {
    padding-bottom: 10px;
    border-bottom: 2px solid #c20c0c;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 25px;
    > div:first-child {
      display: flex;
      align-items: center;
    }
    span {
      margin: 0 10px;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: black;
    }
    .more {
      font-size: 14px;
    }
  }
  main {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;

    .radio_item {
      border-bottom: 1px solid #cccccc;
      padding-bottom: 10px;
      margin-top: 20px;
      display: flex;
      align-items: center;
      &:nth-child(3) {
        border-bottom: 0;
      }
      &:nth-child(4) {
        border-bottom: 0;
      }
      .img {
        margin-right: 20px;
        width: 100px;
        height: 100px;
        cursor: pointer;
        img {
          height: 100%;
        }
      }
      .title {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        cursor: pointer;
        .main_title {
          font-size: 20px;
          &:hover {
            text-decoration: underline;
          }
        }
        .description {
          font-size: 13px;
          color: #cccccc;
        }
      }
    }
  }
`
