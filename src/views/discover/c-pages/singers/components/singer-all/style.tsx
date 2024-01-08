import styled from 'styled-components'

export const AllSingerWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px dashed #666666;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  .singers_name {
    margin-top: 20px;
    width: 20%;
    color: black;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
