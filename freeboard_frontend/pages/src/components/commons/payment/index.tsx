import { useState } from "react";
import Head from "next/head";
import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../../src/commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;
export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const router = useRouter();
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);
  const { data, refetch } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(
    FETCH_USER_LOGGED_IN,
    {
      variables: { FETCH_USER_LOGGED_IN },
    }
  );

  const chargePoint = async (rsp) => {
    try {
      await createPointTransactionOfLoading({
        variables: {
          impUid: rsp.imp_uid,
        },
      });
      refetch();
      Modal.success({ content: `포인트 충전이 완료되었습니다.` });
      router.push("mypage");
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const onChangeAmount = (e) => {
    setAmount(Number(e.target.value));
  };

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount,
        buyer_email: data?.fetchUserLoggedIn?.email,
        buyer_name: data?.fetchUserLoggedIn?.name,
        //m_redirect_url: ,  << 모바일 웹에서 결제 후 돌아갈 주소
      },
      (rsp) => {
        if (rsp.success) {
          chargePoint(rsp);
        } else {
          console.log("fail");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        <select onChange={onChangeAmount}>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>3000</option>
          <option>5000</option>
          <option>10000</option>
        </select>
        <button onClick={onClickPayment}>결제</button>
      </div>
    </div>
  );
}
