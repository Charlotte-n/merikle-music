import styled from 'styled-components'

export const HotAlbumsWrapper = styled.div`
  .main {
    padding-bottom: 10px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: center;
    font-size: 19px;
  }
  .other {
    padding-right: 8px;
    border-right: 1px solid #c9cac9;
    display: flex;
    color: #666666;
    font-size: 14px;
  }
  .albums {
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-column-gap: 114px;
    .albums_item {
      margin-top: 30px;
      width: 20%;
    }
  }
`
