import { useQuery } from "@apollo/client";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
} from "./paymentList.queries";
import { v4 as uuidv4 } from "uuid";

export default function PaymentListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  const { data: CountOfBuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING
  );
  const { data: CountOfLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );
  const { data: CountOfSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );

  // const PagesOfTransactions =
  //   CountOfBuying.fetchPointTransactionsCountOfBuying +
  //   CountOfLoading.fetchPointTransactionsCountOfLoading +
  //   CountOfSelling.fetchPointTransactionsCountOfSelling;

  return (
    <div>
      <h1> 포인트 사용 내역</h1>
      {data?.fetchPointTransactions.map((el) => (
        <div key={uuidv4}>
          <div>사용 금액{el.amount}</div>
          <div>현재 포인트{el.balance}</div>
          <div>내역 {el.status}</div>
          <div>사용일 {el.createdAt}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
