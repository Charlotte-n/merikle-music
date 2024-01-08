import styled from 'styled-components'
//这里的定位看一下

export const BannerWrapper = styled.div`
  .banner {
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  .banner-item {
    height: 270px;
    width: 730px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    padding-left: 250px;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  display: inline-block;
  width: 247px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`

export const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    //精灵图
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
