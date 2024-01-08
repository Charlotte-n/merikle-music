import styled from 'styled-components'

export const SingerRightItemWrapper = styled.div`
  .singer_some {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
    .item {
      margin-top: 10px;

      width: 20%;
    }
  }
`
