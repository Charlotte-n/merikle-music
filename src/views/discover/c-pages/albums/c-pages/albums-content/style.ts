import styled from 'styled-components'

export const AlbumsContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 100px 100px 100px 100px 100px;
  grid-column-gap: 100px;
  .song_item {
    width: 20%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`
