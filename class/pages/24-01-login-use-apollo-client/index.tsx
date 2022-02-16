import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, // Omit => 특정 데이터를 제외한 데이터를 전부 요청
    IMutationLoginUserArgs // Partial => 요청하는 데이터의 인자들의 뒤에 '?' 를 붙여서 불러오기
  >(LOGIN_USER);

  const onChangeUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  };
  const onClickLogin = async () => {
    try {
      //로그인 관련
      const result = await loginUser({
        variables: {
          email: userEmail,
          password: userPassword,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      //0216, 로그인한 유저 정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          // HTTP의 헤더 등을 첨부할 수  있는 공간, 헤더 또한 글로벌로 넣어줄 수 있음
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      //
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      // 글로벌 스테이트에 저장
      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      // refreshToken 배우기 전까지 임시로 localStorage에 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      router.push(`/23-05-login-check-success`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeUserEmail} />
      비밀번호: <input type="password" onChange={onChangeUserPassword} />
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
}
