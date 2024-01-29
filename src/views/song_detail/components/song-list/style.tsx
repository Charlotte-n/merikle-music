import styled from 'styled-components'

export const SongListWrapper = styled.div`
  width: 100%;
  margin: auto;
`

export const SongListHeader = styled.div`
  margin: 40px 0 20px 0;
  display: flex;
  justify-content: space-between;
  .songlist_left {
    display: flex;
    align-items: center;
    h2 {
      font-size: 20px;
      font-weight: 500;
      margin-right: 10px;
    }
  }

  .songlist_right {
    display: flex;
    .play_songcount {
      margin-right: 3px;
    }
    .count {
      color: #c20c0c;
    }
  }
`

export const SongListTableWrapper = styled.div`
  width: 100%;
  table {
    width: 100%;
    border: 1px solid #d9d9d9;
    border-top: 2px solid #c20c0c;
    border-spacing: 0;
    text-align: left;
    thead {
      width: 100%;
      tr {
        th {
          width: 20%;
          height: 35px;
          color: #666666;
          font-weight: 400;
          background: url(${require('@/assets/img/sprite_table.png')});
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        &:nth-child(2n - 1) {
          background-color: #f7f7f7;
        }
        .play {
          display: inline-block;
          width: 23px;
          height: 23px;
          background-position: -266px -205px;
          cursor: pointer;
          &:hover {
            width: 23px;
            height: 23px;
            background-position: -266px -235px;
          }
        }
        td {
          height: 30px;
          &:first-child {
            padding: 0 30px;
            line-height: 30px;
            .first {
              display: flex;
              align-items: center;
              justify-content: center;
              span:first-child {
                margin-right: 5px;
                display: inline-block;
                color: #999999;
                width: 15px;
              }
            }
          }
          &:nth-child(2) {
            display: inline-block;
            line-height: 30px;
            width: 200px;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`

export const GetMoreContentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .more {
    font-size: 14px;
  }
  .btn {
    margin-top: 20px;
    .load_down {
      border-radius: 20px;
      width: 120px;
      height: 30px;
      color: white;
      background-color: #ff4d40;
    }
  }
`
