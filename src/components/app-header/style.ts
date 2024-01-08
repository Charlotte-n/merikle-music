import styled from 'styled-components'

export const HeaderWapper = styled.div`
  height: 75px;
  color: white;
  background-color: #242424;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .diver {
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 25px 0;
    //查一下text-indent什么意思
    text-indent: -9999px;
  }
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  a {
    display: flex;
    height: 75px;
    line-height: 75px;
    padding: 0px 20px;
    font-size: 16px;
    color: #cccccc;
    &:hover {
      background-color: #000000;
    }
  }
  .active {
    position: relative;
    background-color: #000000;
  }
  .active .icon {
    position: absolute;
    width: 12px;
    height: 7px;
    top: 69px;
    left: 50%;
    transform: translate(-50%, 0);
    background-position: -226px 0;
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  div {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
  .search {
    width: 175px;
    border-radius: 16px;
    background-color: white;
    input {
      border-radius: 16px;
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .create {
    padding: 8px;
    border-radius: 20px;
    color: #666666;
    border: 1px solid #666666;
    &:hover {
      cursor: pointer;
      border: 1px solid white;
      color: white;
    }
  }
  .login {
    color: #cccccc;
  }
`

export const SearchWrapper = styled.div`
  main {
    border-top: 1px solid #e2e2e2;
    color: black;
    display: flex;
    flex-direction: column;
    width: 100%;
    .item {
      display: flex;
      font-size: 12px;
      .left {
        padding: 8px 6px;
        border-right: 1px solid #e2e2e2;
        width: 20%;
      }
      .right {
        padding: 8px 10px;
        border-bottom: 1px solid #e2e2e2;
        width: 80%;
        cursor: pointer;
        .right_item:hover {
          text-decoration: underline;
        }
      }

      &:last-child .right {
        border-bottom: 0;
      }
    }
  }
`
