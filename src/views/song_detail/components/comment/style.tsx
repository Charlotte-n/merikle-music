import styled from 'styled-components'

export const CommentWrapper = styled.div``

export const CommentHeader = styled.div`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  h2 {
    margin-right: 20px;
    font-size: 25px;
    font-weight: 500;
  }
  span {
    font-size: 13px;
    color: #666666;
  }
`

export const CommentContent = styled.div`
  margin-top: 10px;
  display: flex;
  .img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    width: 100%;
    .button {
      margin-top: 30px;
      display: flex;
      flex-direction: row-reverse;
      .btn {
        padding: 5px 10px;
        background-color: #3e8cd6;
        color: white;
        cursor: pointer;
      }
    }
  }
`

export const PaginationWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`
