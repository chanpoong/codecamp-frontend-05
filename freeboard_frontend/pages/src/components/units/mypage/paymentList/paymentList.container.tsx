import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS } from "./paymentList.queries";
import { v4 as uuidv4 } from "uuid";

export default function PaymentListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);

  return (
    <div>
      <h1> 포인트 사용 내역</h1>
      {data?.fetchPointTransactions.map((el) => (
        <div key={uuidv4}>
          <div>사용 금액{el.amount}</div>
          <div>현재 포인트{el.balance}</div>
          <div>내역 {el.status}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
