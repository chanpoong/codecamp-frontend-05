import ButtonForProduct from "../../../../commons/button/buttonForProduct/buttonForProduct";
import * as JH from "./productList.styles";
import { Button, Card } from "antd";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function ProductListPageUI(props) {
  const { Meta } = Card;
  return (
    <JH.Wrapper>
      <JH.WrapperHeader>
        <JH.HeaderTitle>거래 게시판</JH.HeaderTitle>
        <JH.HeaderSearch>
          {props.openSearchBar ? (
            <JH.SearchBarWrapper>
              <JH.SearchBar
                placeholder="판매자 명"
                onChange={props.onChangeSearch}
              />
            </JH.SearchBarWrapper>
          ) : (
            ""
          )}
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={props.onClickOpenSearchBar}
          ></Button>
          <ButtonForProduct
            name={<EditOutlined />}
            onClick={props.SubmitProduct}
          ></ButtonForProduct>
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
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={false || true}
          >
            {props.data?.fetchUseditems.map((el, index) => (
              <JH.ContentsLine
                key={index}
                id={el._id}
                onClick={props.onClickToProductDetail}
              >
                {/* <Card>
                  <Meta
                  title={el.remarks}
                  description={el.name}></Meta> */}
                <JH.itemText>{`${index + 1}`}</JH.itemText>
                <JH.itemText>{el.remarks}</JH.itemText>
                <JH.itemText>
                  {el.name
                    .replaceAll(props.keyword, `!@#${props.keyword}!@#`)
                    .split("!@#")
                    .map((el) => (
                      <JH.SearchedWord
                        key={uuidv4}
                        isMatched={el === props.keyword}
                      >
                        {el}
                      </JH.SearchedWord>
                    ))}
                </JH.itemText>
                <JH.itemText>{el.price}</JH.itemText>

                {/* </Card> */}
              </JH.ContentsLine>
            ))}
          </InfiniteScroll>
        </JH.WrapperList>
        <JH.WrapperFooter></JH.WrapperFooter>
      </JH.WrapperBody>
    </JH.Wrapper>
  );
}
