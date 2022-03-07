import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import _ from "lodash";
import ProductListPageUI from "./productList.presenter";
import { FETCH_USED_ITEMS } from "./productList.queries";
import { getMyDate2 } from "../../../../commons/libraries/utils";
import { GlobalContext } from "../../../../../_app";

export default function ProductListPage() {
  const router = useRouter();
  const { setItem } = useContext(GlobalContext);
  const [keyword, setKeyword] = useState("");
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: 1, search: keyword },
  });
  const [openSearchBar, setOpenSearchBar] = useState(false);

  const SubmitProduct = () => {
    router.push("/products/new");
  };

  const todayDate = getMyDate2(new Date());

  // const onClickToProductDetail = (el) => () => {
  //   const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
  //   const temp = baskets.filter((filterEl) => filterEl._id === el._id);
  //   if (temp.length === 1) {
  //     return;
  //   }

  //   const { __typename, ...plus } = el;
  //   baskets.unshift(plus);
  //   localStorage.setItem(todayDate, JSON.stringify(baskets));

  //   setItem(baskets);

  //   router.push(`/products/${el._id}`);
  // };
  const onClickToProductDetail = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
    const temp = baskets.filter((filterEl) => filterEl._id !== el._id);

    const { __typename, ...plus } = el;
    temp.unshift(plus);
    localStorage.setItem(todayDate, JSON.stringify(temp));
    setItem(temp);
    router.push(`/products/${el._id}`);
  };

  const onClickOpenSearchBar = () => {
    setOpenSearchBar((prev) => !prev);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <ProductListPageUI
      data={data}
      SubmitProduct={SubmitProduct}
      onClickToProductDetail={onClickToProductDetail}
      openSearchBar={openSearchBar}
      onClickOpenSearchBar={onClickOpenSearchBar}
      onLoadMore={onLoadMore}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
