import styled from 'styled-components'

export const AppPlayBar = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  height: 50px;
  background-color: #2e2d2d;
  .bar {
    height: 100%;
    .control {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`
interface BarControlProps {
  isplaying: any
}
export const BarControl = styled.div<BarControlProps>`
  margin-right: 30px;
  display: flex;
  align-items: center;
  height: 100%;
  .pre,
  .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
  .pre {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0
      ${(props: BarControlProps) => (props.isplaying ? '-165px' : '-204px')};
    &:hover {
      background-position: -40px
        ${(props: BarControlProps) => (props.isplaying ? '-165px' : '-204px')};
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const BarProgress = styled.div`
  margin-right: 20px;
  display: flex;
  a {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .bar_slider {
    display: flex;
    align-items: center;
    .play_time {
      color: #979797;
      span {
        &:first-child {
          margin-right: 5px;
        }
        &:nth-child(2) {
          margin-right: 5px;
          color: #777777;
        }
        &:last-child {
          color: #777777;
        }
      }
    }
  }
`
//从外界接收的props
interface IBarOperator {
  playmode: number
}
export const MusicOperation = styled.div<IBarOperator>`
  display: flex;
  .left {
    display: flex;
    .pip {
      width: 25px;
      height: 25px;
      background: url(${require('@/assets/img/pip_icon')});
    }
    .add,
    .share {
      width: 25px;
      height: 25px;
    }
    .add {
      background-position: -88px -163px;
    }
    .share {
      background-position: -114px -163px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding: 0 15px;
    background-position: -147px -248px;
    .btn {
      width: 25px;
      height: 25px;
    }
    .first {
      background-position: -2px -248px;
    }
    .second {
      background-position: ${(props) => {
        switch (props.playmode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
      }}
    .playlist {
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
