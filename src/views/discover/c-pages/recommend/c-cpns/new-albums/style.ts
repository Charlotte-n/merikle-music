import styled from 'styled-components'

export const NewAblumsWrapper = styled.div`
  .banner {
    padding: 10px 20px;
    .banner_item {
      background-color: #f5f5f5;
      height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;

      .arrow {
        //这个是做微调的
        position: relative;
        top: -9px;
        width: 17px;
        height: 17px;
        cursor: pointer;
      }
      .arrow_left {
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      .arrow_right {
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
      .banners {
        overflow: hidden;
        flex: 1;
        .banner_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .albums {
            width: 24%;
          }
        }
      }
    }
  }
`
