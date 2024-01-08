import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .ranking_content {
    display: flex;
    margin: 10px auto;
    width: 93%;
    height: 474px;
    background: url(${require('@/assets/img/recommend-top-bg.png')});
    .col {
      width: 230px;
    }
  }
`
