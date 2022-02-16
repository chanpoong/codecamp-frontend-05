import * as JH from "./productList.styles";

export default function ProductListPageUI(props) {
  return (
    <JH.Wrapper>
      <JH.WrapperHeader>
        <JH.HeaderTitle>거래 게시판</JH.HeaderTitle>
        <JH.HeaderSearch>
          <JH.SearchBar placeholder="Search" />
          <JH.SearchButton>검색</JH.SearchButton>
        </JH.HeaderSearch>
      </JH.WrapperHeader>
      <JH.WrapperBody>
        <JH.ContentsLine>
          <JH.itemText> No.</JH.itemText>
          <JH.itemText>상품명</JH.itemText>
          <JH.itemText>판매자</JH.itemText>
          <JH.itemText>가격</JH.itemText>
        </JH.ContentsLine>
        <JH.WrapperList>
          {props.data?.fetchUseditems?.map((el, index) => (
            <JH.ContentsLine key={index}>
              <JH.itemText>{`${index + 1}`}</JH.itemText>
              <JH.itemText>{el.remarks}</JH.itemText>
              <JH.itemText>{el.name}</JH.itemText>
              <JH.itemText>{el.price}</JH.itemText>
            </JH.ContentsLine>
          ))}
        </JH.WrapperList>
        <button onClick={props.aaa}>aaa</button>
      </JH.WrapperBody>
    </JH.Wrapper>
  );
}
