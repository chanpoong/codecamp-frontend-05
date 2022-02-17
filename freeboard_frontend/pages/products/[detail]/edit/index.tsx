import ProductWritePage from "../../../src/components/units/product/write/productWrite.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`;
export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.detail) },
  });
  return <ProductWritePage isEdit={true} data={data} />;
}
