import styled from 'styled-components'
import { repeat } from 'lodash'

export const PlayListWrapper = styled.div`
  width: 986px;
  height: 301px;
  margin: 0 auto;
  color: white;
  .header {
    display: flex;
    padding: 0 10px;
    height: 40px;
    background-position: 0 0;
    .left {
      width: 55%;
      display: flex;
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
      }
    }
    .right {
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
  .mask {
    background-color: black;
    content: '';
    display: inline-block;
    position: absolute;
    top: 40px;
    right: 220px;
    bottom: 50px;
    left: 220px;
    opacity: 0.6;
  }
  .bg {
    display: flex;
    width: 976px;
    height: 263px;
    padding: 0 5px;
    overflow: hidden;
    background-image: url(${(props) => props.background});
    background-position: -1014px 0;
    background-size: 980px;
    background-repeat: ${(props) => (props.background ? 'repeat' : 'repeat-y')};
    .left {
      padding: 5px 15px;
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
      overflow: auto;
      white-space: pre-wrap;
      line-height: 2;
      font-size: 12px;
      max-height: 300px;
      color: #c1c1c1;
      z-index: 100;
      &::-webkit-scrollbar {
        display: none;
      }
      .active {
        color: red;
        font-size: 13px;
      }
    }
  }
`
