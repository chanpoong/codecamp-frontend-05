import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getMyDate } from "../../../commons/libraries/utils";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
} from "./mypage.queries";

import { useState } from "react";
import * as JH from "./mypage.styles";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: IBoughtProduct } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const { data: ISoldProduct } = useQuery(FETCH_USED_ITEMS_I_SOLD);
  const { data: ProductCountISold } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD);
  const router = useRouter();

  const [showList, setShowList] = useState(false);
  console.log(ISoldProduct);

  const onClickMoveToPayment = () => {
    router.push("/payment");
  };
  const onChangeSwitch = () => {
    setShowList((prev) => !prev);
  };

  return (
    <JH.Wrapper>
      <JH.Sidebar>
        <JH.SidebarItems>
          <div>{`${data?.fetchUserLoggedIn.name}`}</div>
          <div>{`point: ${data?.fetchUserLoggedIn.userPoint.amount}`}</div>
          <button onClick={onClickMoveToPayment}>포인트 충전</button>
        </JH.SidebarItems>
      </JH.Sidebar>
      <JH.MypageWrapper>
        <div>
          <JH.Title>
            마이 페이지
            <div>
              {showList ? <h1>구매한 상품</h1> : <h1>판매중인 상품</h1>}
              <JH.ToggleSwitch
                defaultChecked={false}
                onChange={onChangeSwitch}
              />
            </div>
          </JH.Title>

          {showList ? (
            <JH.SoldListWrapper>
              {IBoughtProduct?.fetchUseditemsIBought.map((el) => (
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
              {ISoldProduct?.fetchUseditemsISold.map((el) => (
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
            </JH.SoldListWrapper>
          )}
        </div>
      </JH.MypageWrapper>
    </JH.Wrapper>
  );
}
