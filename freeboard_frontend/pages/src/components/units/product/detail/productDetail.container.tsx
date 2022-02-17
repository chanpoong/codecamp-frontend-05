import { useMutation, useQuery } from "@apollo/client";
import { Router, useRouter } from "next/router";
import { UseMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductDetailPageUI from "./productDetail.presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./productDetail.queries";

export default function ProductDetailPage() {
  const router = useRouter();
  const { moveToPage } = UseMoveToPage();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.detail) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const onClickDeleteProduct = async () => {
    await deleteUseditem({
      variables: {
        useditemId: String(router.query.detail),
      },
    });
    router.push("/products");
  };

  return (
    <ProductDetailPageUI
      data={data}
      router={router}
      onClickDeleteProduct={onClickDeleteProduct}
      moveToPage={moveToPage}
    />
  );
}
