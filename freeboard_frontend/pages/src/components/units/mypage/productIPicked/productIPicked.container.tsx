import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_I_PICKED } from "./productIPicked.queries";
import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/utils";
import { gql } from "@apollo/client";
import { Modal } from "antd";

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function ProductIPickedPage() {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: { page: 1, search: "" },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const pickProduct = async (e) => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: e.target.id,
        },
      });
      refetch();
      Modal.success({ content: `상품을 장바구니에서 제거했습니다.` });
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        {data?.fetchUseditemsIPicked.map((el) =>
          el.soldAt ? (
            ""
          ) : (
            <div key={uuidv4}>
              <button id={el._id} onClick={pickProduct}>
                장바구니에서 삭제
              </button>

              <div>
                상품명{el.name} {el.soldAt ? "[판매완료]" : ""}
              </div>
              <div>
                {el.images ? (
                  <img
                    style={{ maxHeight: 150, maxWidth: 150 }}
                    src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  />
                ) : (
                  <img src="/img/commonImg/nolza.jpeg" />
                )}
              </div>
              <div>내용{el.contents}</div>
              <div>한줄평{el.remarks}</div>
              <div>가격{el.price}</div>
              <div>등록일 {getMyDate(el.createdAt)}</div>
              <br />
            </div>
          )
        )}
      </div>
    </div>
  );
}
