import styled from 'styled-components'

export const SingerCateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  h3 {
    margin: 0;
    font-size: 18px;
  }
  ul {
    padding: 0 10px;
    list-style-type: square;
    width: 100%;
    li {
      padding: 10px 0;
      cursor: pointer;
      margin-top: 10px;
      font-size: 13px;
      color: #798a92;
      width: 100%;
      &:first-child {
        margin-top: 0;
      }
      &:hover {
        text-decoration: underline;
      }
      a {
        color: #333333;
      }
    }
  }
  .active {
    background-color: #e0e0e0;
  }
`
