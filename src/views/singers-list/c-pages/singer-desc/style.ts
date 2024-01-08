import styled from 'styled-components'

export const SingerDescribeWrapper = styled.div`
  background-color: white;
  padding: 20px 0px;
  display: flex;
  align-items: flex-start;
  .img {
    margin-right: 50px;
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .singer_desc {
    flex: 1;
    .name {
      padding-bottom: 10px;
      border-bottom: 1px solid #cccccc;
      .singer_name {
        display: flex;
        align-items: center;
        &:first-child {
          font-size: 23px;
        }
        .level {
          margin: 0 10px;
          display: inline-block;
          width: 70px;
          height: 21px;
          background-position: -134px -188px;
        }
        .gender {
          margin-right: 10px;
          display: inline-block;
          width: 16px;
          height: 16px;
          background-position: -70px 0;
        }
        .sixin {
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 93px;
          height: 32px;
          background-position: 0 -678px;
          span {
            padding-left: 20px;
            padding-top: 3px;
            font-size: 13px;
          }
        }
        .focus {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 78px;
          height: 32px;
          background-position: 0 -719px;
          color: whitesmoke;
          font-size: 12px;
        }
      }
      .address {
        margin-top: 10px;
        display: flex;
        align-items: center;
        .renzheng {
          margin-right: 10px;
          display: inline-block;
          width: 70px;
          height: 22px;
          background-position: 0 -479px;
        }
        .singer {
          font-size: 14px;
        }
      }
    }
    .dynamic {
    }
    .desc {
    }
  }
  .dynamic {
    ul {
      padding: 0;
      list-style: none;
      display: flex;

      li {
        border-right: 1px solid #cccccc;
        padding-right: 20px;
        display: flex;
        flex-direction: column;
        &:last-child {
          border-right: 0;
        }
        &:nth-child(2) {
          padding-left: 20px;
        }
        &:nth-child(3) {
          padding-left: 20px;
        }
        span:first-child {
          margin-bottom: 3px;
          font-size: 20px;
          color: #666666;
        }
      }
    }
  }
  .desc {
    line-height: 2;
    .single {
      color: #666666;
      display: flex;
      align-items: center;
      dd {
        margin-left: 4px;
      }
    }
    .region {
      color: #666666;
      display: flex;
      align-items: center;
      dd {
        margin-left: 4px;
      }
    }
  }
`
