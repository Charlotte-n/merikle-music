import styled from 'styled-components'

export const SingerItemWrapper = styled.div`
  margin-top: 10px;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  .pic {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .singers_list {
    height: 100%;
    display: flex;
    cursor: pointer;
    .content {
      padding: 8px 20px;
      border-top: 1px solid #e9e9e9;
      border-right: 1px solid #e9e9e9;
      border-bottom: 1px solid #e9e9e9;
      background-color: #fafafa;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 130px;
      .title {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 7px;
      }
      .subtitle {
      }
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
  .button {
    button {
      border: 1px solid #dcdcdc;
      border-radius: 5px;
      width: 100%;
      height: 30px;
      font-weight: 700;
    }
  }
`
