import styled from 'styled-components'

export const HotArchoItemWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  .pic {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 100%;
    }
  }
  .name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-weight: 600;
      margin-bottom: 8px;
    }
    .subtitle {
    }
  }
`
