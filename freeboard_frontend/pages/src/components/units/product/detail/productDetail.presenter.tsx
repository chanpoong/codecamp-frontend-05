import ButtonForProduct from "../../../commons/button/buttonForProduct/buttonForProduct";
import * as JH from "./productDetail.styles";

export default function ProductDetailPageUI(props) {
  return (
    <JH.Wrapper>
      <JH.WrapperTitle>팝니다</JH.WrapperTitle>
      <JH.InnerWrapper>
        <JH.TitleWrapper>
          <JH.Title>상품명:</JH.Title>
          <JH.TitleData>{props.data?.fetchUseditem.remarks}</JH.TitleData>
        </JH.TitleWrapper>
        <JH.ProductInfoWrapper>
          <JH.Seller>판매자:</JH.Seller>
          <JH.SellerData>{props.data?.fetchUseditem.name}</JH.SellerData>

          <JH.Seller>가격:</JH.Seller>
          <JH.SellerData>{props.data?.fetchUseditem.price}</JH.SellerData>
        </JH.ProductInfoWrapper>

        <JH.ContentsWrapper>
          <JH.ContentsTitle>내용</JH.ContentsTitle>
          <JH.ContentsData>
            {props.data?.fetchUseditem.contents}
          </JH.ContentsData>
        </JH.ContentsWrapper>
        <JH.ButtonWrapper>
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
      </JH.InnerWrapper>
    </JH.Wrapper>
  );
}
