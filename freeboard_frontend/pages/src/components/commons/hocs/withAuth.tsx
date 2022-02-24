import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { Modal } from "antd";
// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { GlobalContext } from "../../../../_app";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      Modal.error({ content: "로그인이 필요합니다." });
      router.push("/login");
    }
  }, []);
  return Component({ ...props });
};

// export default withAuth;
