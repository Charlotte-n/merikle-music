import styled from 'styled-components'

export const SongItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: #c1c1c1;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    .operate {
      position: absolute;
      left: 260px;
      top: 4px;
      display: flex;
      .icon {
        cursor: pointer;
        margin-right: 10px;
        width: 16px;
        height: 14px;
        &:last-child {
          margin-right: 0;
        }
      }
      .collect {
        background-position: -24px 0;
      }
      .share {
        background-position: 0 0;
      }
      .download {
        background-position: -57px -50px;
      }
      .delete {
        background-position: -51px 0;
      }
    }
  }

  .song_item_right {
    span {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      &:nth-child(1) {
        display: inline-block;
        width: 100px;
      }
      &:nth-child(2) {
        color: #484849;
      }
    }
  }
`
