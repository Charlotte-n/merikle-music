import styled from 'styled-components'

export const AllAlbumsWrapper = styled.div`
  .album_header {
    padding-bottom: 10px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: flex-end;
    .main_title {
      margin-right: 20px;
      font-size: 18px;
    }
    .sub_title {
      color: #666666;
      > span {
        padding: 0 10px;
        border-right: 1px solid #c7c7d4;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        &:last-child {
          border-right: 0;
        }
      }
    }
  }
  .all_albums {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 100px 100px 100px 100px 100px;
    grid-column-gap: 113px;
    grid-row-gap: 50px;
  }
`
export const PaginationWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`
