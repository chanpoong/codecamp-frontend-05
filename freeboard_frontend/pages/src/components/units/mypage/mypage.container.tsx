import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  const onClickMoveToPayment = () => {
    router.push("/payment");
  };

  return (
    <div>
      <div>{`${data?.fetchUserLoggedIn.name} 님의 마이페이지`}</div>
      <div>
        <div>{`point: ${data?.fetchUserLoggedIn.userPoint.amount}`}</div>

        <button onClick={onClickMoveToPayment}>포인트 충전</button>
      </div>
    </div>
  );
}
