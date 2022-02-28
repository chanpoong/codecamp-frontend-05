import { useContext } from "react";
import { GlobalContext } from "../../../../../_app";
import ShowImagesInCarouselPage from "../../../../commons/showImages/Carousel";
import ButtonForProduct from "../../../../commons/button/buttonForProduct/buttonForProduct";
import ProductCommentList from "../../../commons/comments/product/productCommentList/productCommentList.container";
import * as JH from "./productDetail.styles";

export default function ProductDetailPageUI(props) {
  const { server } = useContext(GlobalContext);
  return (
    <JH.Wrapper>
      <JH.WrapperTitle>팝니다</JH.WrapperTitle>
      <JH.InnerWrapper>
        <JH.TitleWrapper>
          <JH.Title>상품명:</JH.Title>
          <JH.TitleData>{props.data?.fetchUseditem.name}</JH.TitleData>
        </JH.TitleWrapper>
        <JH.ProductInfoWrapper>
          <JH.Seller>한줄평:</JH.Seller>
          <JH.SellerData>{props.data?.fetchUseditem.remarks}</JH.SellerData>

          <JH.Seller>가격:</JH.Seller>
          <JH.SellerData>{props.data?.fetchUseditem.price}</JH.SellerData>
        </JH.ProductInfoWrapper>

        <JH.ContentsWrapper>
          <JH.ContentsTitle>내용</JH.ContentsTitle>
          <JH.ImageCarouselWrapper>
            <ShowImagesInCarouselPage
              src={`https://storage.googleapis.com/`}
              data={props.data}
            />
          </JH.ImageCarouselWrapper>

          <JH.ContentsData>
            {props.data?.fetchUseditem.contents}
          </JH.ContentsData>
        </JH.ContentsWrapper>

        <JH.ButtonWrapper>
          <ButtonForProduct
            onClick={props.buyProduct}
            name="구매하기"
          ></ButtonForProduct>
          <ButtonForProduct
            onClick={props.pickProduct}
            name="찜하기"
          ></ButtonForProduct>
          <ButtonForProduct
            onClick={props.moveToPage(`/products`)}
            name="목록으로"
          />
          <ButtonForProduct
            onClick={props.moveToPage(
              `/products/${String(props.router.query.detail)}/edit`
            )}
            name="수정하기"
          />
          <ButtonForProduct
            onClick={props.onClickDeleteProduct}
            name="삭제하기"
          />
        </JH.ButtonWrapper>
        <ProductCommentList />
      </JH.InnerWrapper>
    </JH.Wrapper>
  );
}
