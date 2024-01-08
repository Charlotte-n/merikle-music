import styled from 'styled-components'

export const CommendRecommend = styled.div`
  padding: 20px 10px 0;
  .title {
    padding: 10px 10px 5px 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #c10d0c;
    i {
      height: 32px;
      width: 32px;
      display: inline-block;
      background-position: -225px -156px;
    }
    .hot {
      margin-right: 10px;
      font-size: 18px;
      font-weight: 500;
    }
    .subtitles {
      display: flex;
      flex: 6;
      color: #666666;
      .subtitle-item {
        padding: 0 10px;
        color: #666666;
        border-right: 1px solid #cccccc;
        &:last-child {
          padding-right: 0;
          border-right: 0;
        }
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .more {
      color: #666666;
      .icon {
        margin-left: 3px;
        display: inline-block;
        width: 12px;
        height: 12px;
        background-position: 0 -240px;
      }
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`
