import styled from 'styled-components'

export const DjRankingItemWrapper = styled.div`
  display: flex;
  align-items: center;
  .img {
    margin-right: 10px;
    width: 130px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    .main_title {
      margin-bottom: 30px;
      font-size: 18px;
      font-weight: 600;
    }
    .writer {
      margin-bottom: 10px;
    }
    .total {
      color: #9999a3;
    }
  }
`
