import styled from 'styled-components'

export const FooterWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #666666;

  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    li {
      list-style: none;
      a {
        padding: 0 10px;
        border-right: 1px solid #cccccc;
        color: #666666;
        &:hover {
          text-decoration: underline;
        }
      }
      &:last-child {
        a {
          border-right: 0;
        }
      }
    }
  }
  .feedback {
    text-align: center;
    font-size: 12px;
    & span:first-child {
      margin-right: 10px;
    }
  }
  .permission {
    margin-top: 10px;
    font-size: 13px;
  }
  .right {
    margin-top: 10px;
    & span {
      margin-right: 5px;
    }
  }
`
