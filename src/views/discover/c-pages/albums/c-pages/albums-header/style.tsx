import styled from 'styled-components'

export const AlbumsHeaderWrapper = styled.div`
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #bf0b0c;
  .albums_left {
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
      margin-right: 8px;
      font-size: 25px;
      font-weight: 500;
    }
  }
  .albums_right {
  }
  .hot_button {
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #ca0b0f;
    color: white;
    cursor: pointer;
  }
`

export const AlbumsCategoryWrapper = styled.div`
  color: black;
  header {
    border-bottom: 1px solid #bebebe;
    padding-bottom: 15px;
    span {
      padding: 5px 10px;
      border: 1px solid #bebebe;
      border-radius: 3px;
      background-color: #f8f8f8;
      font-size: 13px;
    }
  }
  main {
    width: 100%;
    dl {
      display: flex;
      align-items: flex-start;
      width: 80%;
      dt {
        width: 100px;
      }
      .all {
        border-left: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        width: 700px;
        height: 100%;
        dd {
          cursor: pointer;
          width: 70px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
