import styled from 'styled-components'

export const NavBarHeader = styled.div`
  font-size: 12px;
  background-color: #c20c0c;
  height: 30px;
  line-height: 30px;
  color: white;
  .header {
    padding-left: 400px;
    a {
      margin-right: 40px;
      color: white;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .active {
    background-color: #9b0909;
    padding: 5px 10px;
    border-radius: 18px;
  }
`
