import styled from 'styled-components'

export const HotArchoItemWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  &:hover {
    background-color: #f5f5f5;
  }
  .pic {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    img {
      width: 50px;
      height: 100%;
    }
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    .title {
      font-weight: 600;
      margin-bottom: 8px;
      &:hover {
        text-decoration: underline;
      }
    }
    .subtitle {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
