import styled from 'styled-components'
export const DjCategoryWrapper = styled.div`
  width: 100%;
  .category_group {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .category_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      cursor: pointer;
    }
  }
  .dots {
    bottom: -30px;
    li {
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #c20c0c;
      }
    }
  }
  .active {
    border: 2px solid #c20c0c;
  }
`
interface CategoryImgItemProps {
  imgUrl: string
}
export const CategoryImgItemWrapper = styled.div<CategoryImgItemProps>`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.imgUrl});
`
export const BannerControlWrapper = styled.div`
  position: relative;
  left: 300px;
  top: 0;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    //精灵图
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    cursor: pointer;
  }
  .left {
    bottom: 50px;
    left: -300px;
    background-position: 0 -360px;
  }
  .right {
    bottom: 50px;
    right: 320px;
    background-position: 0 -508px;
  }
`
