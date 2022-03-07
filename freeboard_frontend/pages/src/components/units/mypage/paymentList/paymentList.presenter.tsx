import { v4 as uuidv4 } from "uuid";
import { getMyDate } from "../../../../commons/libraries/utils";
import * as JH from "./paymentList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function PaymentListPageUI(props) {
  const MinusPoint = (el) => {
    return Number(String(el).replaceAll("-", ""));
  };

  return (
    <JH.Wrapper>
      <h1> 포인트 사용 내역</h1>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMorePointTransactions}
        hasMore={false || true}
      >
        {props.data?.fetchPointTransactions.map((el) => (
          <JH.PointTransactionsWrapper key={uuidv4}>
            {el.status === "판매" || el.status === "충전" ? (
              <div>
                <span>충전된 포인트</span>
                <JH.TextBlue>{el.amount}</JH.TextBlue>
              </div>
            ) : (
              <div>
                <span>사용한 포인트</span>
                <JH.TextRed>{MinusPoint(el.amount)}</JH.TextRed>
              </div>
            )}

            {el.balance === 0 ? (
              <JH.TextRed>현재 포인트{el.balance}</JH.TextRed>
            ) : (
              <div>현재 포인트{el.balance}</div>
            )}
            {el.status === "판매" || el.status === "충전" ? (
              <div>
                <span>내역</span>
                <JH.TextBlue>{el.status}</JH.TextBlue>
              </div>
            ) : (
              <div>
                <span>내역</span>
                <JH.TextRed>{el.status}</JH.TextRed>
              </div>
            )}

            <div>사용일 {getMyDate(el.createdAt)}</div>
            <br />
          </JH.PointTransactionsWrapper>
        ))}
      </InfiniteScroll>
    </JH.Wrapper>
  );
}
