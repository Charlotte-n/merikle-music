import styled from 'styled-components'
export const LoginWrapper = styled.div`
  padding: 20px 10px;
  background-color: #f2f2f2;
  height: 120px;
  text-align: center;
  .top {
    height: 30px;
    background-color: black;
  }
  .dec {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 26px;
  }
  .login {
    width: 100%;
    text-align: center;
    .button {
      margin-top: 10px;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 6px;
      color: white;
      background-color: #c60b11;
    }
  }
`
export const LoginTop = styled.div`
  display: flex;
  justify-content: center;
  .left {
    margin-right: 50px;
    width: 130px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 200px;
    height: 200px;
    text-align: center;
    .scannerCode {
      margin-bottom: 10px;
      font-size: 18px;
    }
    img {
      margin-bottom: 10px;
      width: 150px;
      height: 150px;
    }
    a {
      color: #42aae2;
    }
  }
`
export const LoginBottom = styled.div`
  padding-bottom: 20px;
  .bottom {
    margin-top: 50px;
    text-align: center;
    .other {
      padding: 8px 15px;
      border: 1px solid black;
      border-radius: 20px;
      background-color: white;
    }
  }
`

export const PhoneCodeWrapper = styled.div``
export const PhoneCodeTop = styled.div`
  padding: 20px;
  .ant-space-item {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    .ant-space {
      width: 80%;
    }
  }
  .passwordLogin {
    &:hover {
      text-decoration: underline #666;
    }
  }
`

export const PhoneCodeBottom = styled.div`
  padding-left: 10px;
  background-color: #f7f7f7;
  height: 50px;
  text-align: left;
  color: #0c72c3;
  line-height: 50px;
  font-size: 12px;
  cursor: pointer;
  span {
    &:hover {
      text-decoration: underline #0c72c3;
    }
  }
`
