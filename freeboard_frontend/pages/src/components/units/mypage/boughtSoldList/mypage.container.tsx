import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import {
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
} from "./mypage.queries";

import { useState } from "react";
import MyPageUI from "./mypage.presenter";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: IBoughtProduct, fetchMore: fetchMoreIBought } = useQuery(
    FETCH_USED_ITEMS_I_BOUGHT
  );
  const { data: ISoldProduct, fetchMore: fetchMoreISold } = useQuery(
    FETCH_USED_ITEMS_I_SOLD
  );
  const { data: ProductCountISold } = useQuery(FETCH_USED_ITEMS_COUNT_I_SOLD); // 판매 완료된 상품 조회
  const { data: CountOfSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  ); // 판매완료 상품의 개수(포인트 적립 횟수)

  const router = useRouter();

  const [showList, setShowList] = useState(false);

  const onClickMoveToPayment = () => {
    router.push("/mypage/payment");
  };

  const onChangeSwitch = () => {
    setShowList((prev) => !prev);
  };
  const onLoadMoreISold = async () => {
    if (!ISoldProduct) return;
    await fetchMoreISold({
      variables: {
        page: Math.ceil(ISoldProduct?.fetchUseditemsISold.length / 10) + 1,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsISold)
          return { fetchUseditemsISold: [...prev.fetchUseditemsISold] };
        return {
          fetchUseditemsISold: [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ],
        };
      },
    });
  };
  const onLoadMoreIBought = () => {
    if (!data) return;
    fetchMoreIBought({
      variables: {
        page: Math.ceil(IBoughtProduct?.fetchUseditemsIBought.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemsIBought)
          return { fetchUseditemsIBought: [...prev.fetchUseditemsIBought] };

        return {
          fetchUseditemsIBought: [
            ...prev.fetchUseditemsIBought,
            ...fetchMoreResult.fetchUseditemsIBought,
          ],
        };
      },
    });
  };

  return (
    <MyPageUI
      data={data}
      IBoughtProduct={IBoughtProduct}
      ISoldProduct={ISoldProduct}
      onClickMoveToPayment={onClickMoveToPayment}
      showList={showList}
      onChangeSwitch={onChangeSwitch}
      onLoadMoreISold={onLoadMoreISold}
      onLoadMoreIBought={onLoadMoreIBought}
    />
  );
}
