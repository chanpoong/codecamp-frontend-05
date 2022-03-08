import * as JH from "./mypage.styles";
import InfiniteScroll from "react-infinite-scroller";
import { getMyDate } from "../../../../commons/libraries/utils";


export default function MyPageUI(props) {
  // state = {
  //   current: 'mail',
  // };
  // const { SubMenu } = Menu;
  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({ current: e.key });
  // };

  return (
    <JH.Wrapper>
      <JH.Sidebar>
        <JH.SidebarItems>
          <div>{`${props.data?.fetchUserLoggedIn.name}`}</div>
          <div>{`point: ${props.data?.fetchUserLoggedIn.userPoint.amount}`}</div>
          <button onClick={props.onClickMoveToPayment}>포인트 충전</button>
        </JH.SidebarItems>
      </JH.Sidebar>
      <JH.MypageWrapper>
        <div>
          <JH.Title>
            마이 페이지
            <div>
              {props.showList ? <h1>구매한 상품</h1> : <h1>판매중인 상품</h1>}
              <JH.ToggleSwitch
                defaultChecked={false}
                onChange={props.onChangeSwitch}
              />
            </div>
          </JH.Title>
          <InfiniteScroll
            pageStart={0}
            loadMore={
              props.showList ? props.onLoadMoreIBought : props.onLoadMoreISold
            }
            hasMore={false || true}
          >
            {props.showList ? (
              <JH.SoldListWrapper>
                {props.IBoughtProduct?.fetchUseditemsIBought.map((el) => (
                  <JH.ItemBoxInfo key={el._id}>
                    <div>상품 이름: {el.name}</div>
                    <div>상품 가격: {el.price}</div>
                    <div>판매자: {el.seller.name}</div>
                    <JH.ItemInfoDate>
                      구매 시간 {getMyDate(el.soldAt)}
                    </JH.ItemInfoDate>
                  </JH.ItemBoxInfo>
                ))}
              </JH.SoldListWrapper>
            ) : (
              <JH.SoldListWrapper>
                {props.ISoldProduct?.fetchUseditemsISold.map((el) => (
                  <JH.ItemBoxInfo key={el._id}>
                    <div>
                      상품 이름: {el.name}
                      <JH.ShowSold>{el.buyer ? "[판매 완료]" : ""}</JH.ShowSold>
                    </div>
                    <div>상품 가격: {el.price}</div>

                    {el.buyer ? (
                      <div>구매자: {el.buyer.name}</div>
                    ) : (
                      <div>구매자 </div>
                    )}
                    {el.soldAt ? (
                      <JH.ItemInfoDate>
                        구매 시간 {getMyDate(el.soldAt)}
                      </JH.ItemInfoDate>
                    ) : (
                      <JH.ItemInfoDate>구매 시간</JH.ItemInfoDate>
                    )}
                  </JH.ItemBoxInfo>
                ))}
                {/* <Pagination
                defaultCurrent={1}
                total={
                  props.CountOfSelling.fetchPointTransactionsCountOfSelling
                } */}
                {/* /> */}
              </JH.SoldListWrapper>
            )}
          </InfiniteScroll>
        </div>
      </JH.MypageWrapper>
    </JH.Wrapper>
  );
}
