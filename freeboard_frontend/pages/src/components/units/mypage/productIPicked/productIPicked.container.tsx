import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "./productIPicked.queries";
import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/utils";

import { Modal } from "antd";
import { Pagination } from "antd";

export default function ProductIPickedPage() {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: { page: 1, search: "" },
  });
  const { data: CountOfIPicked } = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

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
  const onChangeOtherPage = (page) => {
    refetch({
      page,
    });
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        {data?.fetchUseditemsIPicked.map((el) => (
          <div key={uuidv4}>
            <button id={el._id} onClick={pickProduct}>
              장바구니에서 삭제
            </button>

            <div>상품명{el.name}</div>
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
        ))}
        <Pagination
          defaultCurrent={1}
          total={CountOfIPicked?.fetchUseditemsCountIPicked}
          onChange={onChangeOtherPage}
        />
      </div>
    </div>
  );
}
