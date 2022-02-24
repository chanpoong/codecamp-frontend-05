import { useContext, useState } from "react";
import { useRouter } from "next/router";
import LoginComponentPageUI from "./loginComponent.presenter";
import { GlobalContext } from "../../../../../_app";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { LOGIN_USER } from "./loginComponent.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../../src/commons/types/generated/types";
import { Modal } from "antd";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginComponentPage() {
  const router = useRouter();
  const client = useApolloClient();

  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [getUserId, setGetUserId] = useState("");
  const [getUserPassword, setGetUserPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">, // Omit => 특정 데이터를 제외한 데이터를 전부 요청
    IMutationLoginUserArgs // Partial => 요청하는 데이터의 인자들의 뒤에 '?' 를 붙여서 불러오기
  >(LOGIN_USER);

  const onChangeUserId = (e) => {
    setGetUserId(e.target.value);
  };
  const onChangeUserPassword = (e) => {
    setGetUserPassword(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.key === "Enter") onClickLogin();
  };

  const onClickLogin = async () => {
    if (getUserId === "" || getUserPassword === "")
      Modal.error({ content: "정보를 확인해주세요." });

    try {
      const result = await loginUser({
        variables: {
          email: getUserId,
          password: getUserPassword,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          // HTTP의 헤더 등을 첨부할 수  있는 공간, 헤더 또한 글로벌로 넣어줄 수 있음
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      });
      //
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;

      if (setAccessToken) setAccessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginComponentPageUI
      onChangeUserId={onChangeUserId}
      onChangeUserPassword={onChangeUserPassword}
      onClickLogin={onClickLogin}
      onPressEnter={onPressEnter}
    />
  );
}
