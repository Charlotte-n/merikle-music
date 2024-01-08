import styled from 'styled-components'

export const ListenSongsRankingWrapper = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: flex-end;
      div:first-child {
        margin-right: 10px;
        font-size: 18px;
      }
    }
    .right {
      span {
        padding: 0 10px;
        border-right: 1px solid #cccccc;
        &:last-child {
          padding-right: 0;
          border-right: 0;
        }
      }
    }
  }
  main {
    margin-top: 8px;
    display: table;
    border: 1px solid #e2e2e2;
    border-top: 2px solid #ba0c0c;
    width: 100%;
    .row {
      padding-left: 20px;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      height: 40px;
      line-height: 40px;
      &:nth-child(2n) {
        background-color: #f7f7f7;
      }
      .song_list {
        display: flex;
        align-items: center;
        .singer_name {
          cursor: pointer;
          color: #666666;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      span {
        margin-right: 20px;
      }
      .operate {
        width: 300px;
        position: relative;
        right: 1px;
        display: flex;
        justify-content: center;
        visibility: hidden;
        cursor: pointer;
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
          cursor: pointer;
          visibility: visible;
        }
      }
    }
    .songs_name {
      font-weight: 600;
    }
  }
  .more {
    margin-top: 8px;
    text-align: right;
    cursor: pointer;
    color: #666666;
  }
`
