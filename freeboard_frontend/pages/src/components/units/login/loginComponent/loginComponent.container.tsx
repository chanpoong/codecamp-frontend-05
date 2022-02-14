import { useState } from "react";
import { useRouter } from "next/router";
import LoginComponentPageUI from "./loginComponent.presenter";

export default function LoginComponentPage() {
  const router = useRouter();
  const [getUserId, setGetUserId] = useState("");
  const [getUserPassword, setGetUserPassword] = useState("");

  const onChangeUserId = (e) => {
    setGetUserId(e.target.value);
  };
  const onChangeUserPassword = (e) => {
    setGetUserPassword(e.target.value);
  };

  const onClickLogin = () => {
    if (getUserId === "" || getUserPassword === "") {
      alert("정보를 입력해 주세요.");
    } else {
      router.push(`/boards`);
    }
  };

  return (
    <LoginComponentPageUI
      onChangeUserId={onChangeUserId}
      onChangeUserPassword={onChangeUserPassword}
      onClickLogin={onClickLogin}
    />
  );
}
