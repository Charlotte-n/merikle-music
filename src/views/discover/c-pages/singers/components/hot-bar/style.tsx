import styled from 'styled-components'

export const HotBarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .active {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #c20c0c;
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .letter {
    margin-right: 15px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .other {
    &:hover {
      cursor: pointer;
    }
  }
`
