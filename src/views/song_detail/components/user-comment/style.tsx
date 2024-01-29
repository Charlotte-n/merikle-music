import styled from 'styled-components'

export const UserCommentWrapper = styled.div`
  .header {
    padding-bottom: 5px;
    border-bottom: 1px solid #cfcfcf;
  }
  .user_comment {
    width: 100%;
    padding: 15px 0;
    display: flex;
    border-bottom: 1px dashed #cfcfcf;
    .img {
      margin-right: 10px;
      width: 50px;
      height: 50px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      word-break: break-all;
      .user_comment_content {
        width: 100%;
      }
      .time {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .follow {
          margin-right: 10px;
          padding-right: 10px;
          cursor: pointer;
          border-right: 1px solid #cfcfcf;
        }
        .answer {
          cursor: pointer;
        }
      }
    }
  }
`
