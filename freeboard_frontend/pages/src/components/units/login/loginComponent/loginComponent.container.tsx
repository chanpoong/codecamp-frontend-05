import { useContext, useState } from "react";
import { useRouter } from "next/router";
import LoginComponentPageUI from "./loginComponent.presenter";
import { GlobalContext } from "../../../../../_app";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./loginComponent.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../../src/commons/types/generated/types";
import { Modal } from "antd";

export default function LoginComponentPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
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
      if (setAccessToken) {
        setAccessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);
      }
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
