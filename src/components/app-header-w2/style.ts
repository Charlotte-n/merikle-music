import styled from 'styled-components'

export const HeaderW2Wrapper = styled.div`
  padding: 10px 20px;
  .content {
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #666666;
    h2 {
      font-size: 14px;
      font-weight: 600;
    }
    div {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
