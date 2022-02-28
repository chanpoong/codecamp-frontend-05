import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { Router, useRouter } from "next/router";
import { UseMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductDetailPageUI from "./productDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./productDetail.queries";

export default function ProductDetailPage() {
  const router = useRouter();
  const { moveToPage } = UseMoveToPage();
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const pickProduct = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.detail),
        },
      });
      console.log(result);
      Modal.success({ content: `상품을 장바구니에 추가했습니다.` });
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const buyProduct = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.detail),
        },
      });
      Modal.success({ content: `상품을 구매하였습니다` });
      moveToPage("/products");
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.detail) },
  });
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const onClickDeleteProduct = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.detail),
        },
      });
      moveToPage("/products");
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  return (
    <ProductDetailPageUI
      data={data}
      router={router}
      onClickDeleteProduct={onClickDeleteProduct}
      moveToPage={moveToPage}
      buyProduct={buyProduct}
      pickProduct={pickProduct}
    />
  );
}
