import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../../src/commons/types/generated/types";
import SignupPageUI from "./signup.presenter";
import { CREATE_USER } from "./signup.queries";

export default function SignupPage() {
  const [createUserId, setCreateUserId] = useState("");
  const [createUserPassword, setCreateUserPassword] = useState("");
  const [createUserName, setCreateUserName] = useState("");
  const router = useRouter();

  const onChangeCreateUserId = (e) => {
    setCreateUserId(e.target.value);
  };
  const onChangeCreateUserPassword = (e) => {
    setCreateUserPassword(e.target.value);
  };
  const onChangeCreateUserName = (e) => {
    setCreateUserName(e.target.value);
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">, // Omit => 특정 데이터를 제외한 데이터를 전부 요청
    IMutationCreateUserArgs // Partial => 요청하는 데이터의 인자들의 뒤에 '?' 를 붙여서 불러오기
  >(CREATE_USER);

  const onClickSignup = async () => {
    if (
      createUserId === "" ||
      createUserPassword === "" ||
      createUserName === ""
    )
      Modal.error({ content: "정보를 확인해주세요." });
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: createUserId,
            password: createUserPassword,
            name: createUserName,
          },
        },
      });
      Modal.success({
        content: `${result.data.createUser.name}님 회원가입을 축하합니다!`,
      });
      router.push(`/`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  //   console.log(createUserId);
  //   console.log(createUserPassword);
  //   console.log(createUserName);

  return (
    <SignupPageUI
      onClickSignup={onClickSignup}
      onChangeCreateUserId={onChangeCreateUserId}
      onChangeCreateUserPassword={onChangeCreateUserPassword}
      onChangeCreateUserName={onChangeCreateUserName}
    />
  );
}
