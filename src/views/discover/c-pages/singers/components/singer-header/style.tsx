import styled from 'styled-components'

export const SingerHeaderWrapper = styled.div`
  padding: 10px 0px;
  .content {
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #c20c0c;
    h2 {
      font-size: 18px;
    }
  }
  .more {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
