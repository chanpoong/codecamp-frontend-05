import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import ProductListPageUI from "./productList.presenter";

import { FETCH_USED_ITEMS } from "./productList.queries";
import * as JH from "./productList.styles";

export default function ProductListPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

  console.log(data?.fetchUseditems);
  const aaa = () => {
    router.push("/products/new");
  };
  const onClickToProductDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${event.currentTarget.id}`);
  };

  return (
    <ProductListPageUI
      data={data}
      aaa={aaa}
      onClickToProductDetail={onClickToProductDetail}
    />
  );
}
