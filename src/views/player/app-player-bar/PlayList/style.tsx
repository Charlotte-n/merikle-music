import styled from 'styled-components'
import { repeat } from 'lodash'

export const PlayListWrapper = styled.div`
  width: 990px;
  height: 301px;
  margin: 0 auto;
  color: white;
  .header {
    display: flex;
    padding: 0 14px 0 0;
    height: 40px;
    width: 990px;
    background-position: -2px 0;
    .left {
      width: 55%;
      display: flex;
      padding-left: 10px;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 15px;
      }
      .icon {
        display: flex;
      }
      .icon_collect {
        margin-right: 15px;
        display: flex;
        text-decoration: none;
        font-style: normal;
        .collect {
          width: 16px !important;
          height: 16px !important;
          background-position: -24px 0;
          font-size: 18px;
        }
        &::after {
          margin-left: 5px;
          color: #c8c8c8;
          font-size: 13px;
          content: '收藏全部';
        }
      }
      .line {
        position: absolute;
        top: 13px;
        left: 710px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
        margin: 0;
      }
      .icon_delete {
        cursor: pointer;
      .delete {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -51px 0;
      }
      &:after {
        font-style: normal;
        margin-left: 5px;
        color: #c8c8c8;
        font-size: 13px;
        content: '清除';
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .right {
    padding-right: 10px;
    display: flex;
    align-items: center;
    width: 45%;
    h4 {
      flex: 1;
      font-size: 15px;
      text-align: center;
      font-weight: normal;
    }
    .icon_close {
      display: flex;
      cursor: pointer;
      text-decoration: none;
      font-style: normal;
      .close {
        width: 30px !important;
        height: 30px !important;
        background-position: -195px 9px;
        font-size: 18px;
      }
    }
  }
`

interface props {
  background: string
}
export const Pannel = styled.div<props>`
  width: 100%;
  .mask {
    background-color: black;
    content: '';
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 225px;
    bottom: 50px;
    left: 217px;
    opacity: 0.6;
  }
  .bg {
    display: flex;
    width: 100%;
    height: 263px;
    background-image: url(${(props) => props.background});
    background-position: -999px -29px;
    background-size: 960px;
    background-repeat: ${(props) => (props.background ? 'repeat' : 'repeat-y')};
    .left {
      padding: 5px 8px;
      width: 53%;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      ul {
        text-decoration: none;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          height: 25px;
          line-height: 25px;
          padding-left: 10px;
        }
      }
    }
    .line {
      z-index: 2;
      width: 6px;
      height: 260px;
      background: #000;
      opacity: 0.5;
    }
    .right {
      width: 43%;
      text-align: center;
      overflow: hidden;
      white-space: pre-wrap;
      line-height: 2;
      font-size: 12px;
      max-height: 300px;
      color: #c1c1c1;
      z-index: 100;
      .active {
        color: red;
        font-size: 13px;
      }
      .scroll_bar {
        position: absolute;
        top: 40px;
        right: 225px;
        cursor: pointer;
        width: 10px;
        height: 30px;
        background-color: black;
      }
    }
  }
`
