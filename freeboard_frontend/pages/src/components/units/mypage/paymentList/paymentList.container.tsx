import { useQuery } from "@apollo/client";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING,
} from "./paymentList.queries";

import PaymentListPageUI from "./paymentList.presenter";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../../../src/commons/types/generated/types";

export default function PaymentListPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  const { data: CountOfBuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING
  );
  const { data: CountOfLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING
  );
  const { data: CountOfSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING
  );
  const onLoadMorePointTransactions = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchPointTransactions.length / 10) + 1,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchPointTransactions)
          return { fetchPointTransactions: [...prev.fetchPointTransactions] };
        return {
          fetchPointTransactions: [
            ...prev.fetchPointTransactions,
            ...fetchMoreResult.fetchPointTransactions,
          ],
        };
      },
    });
  };

  return (
    <PaymentListPageUI
      data={data}
      onLoadMorePointTransactions={onLoadMorePointTransactions}
    />
  );
}
