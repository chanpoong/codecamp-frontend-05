import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { IQuery } from "../../../../../../src/commons/types/generated/types";

const Wrapper = styled.div`
  height: 150px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const LogoImage = styled.img`
  height: 80px;
  width: 300px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background-color: grey;
  color: gold;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`;
const LoggedinUserName = styled.div`
  color: white;
  border: none;
`;

// --- 위는 CSS
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onClickToLogin = () => {
    router.push("/login");
  };
  const onClickToHome = () => {
    router.push("/");
  };
  const onClickLogOut = () => {
    logoutUser();
  };
  const onClickRefresh = () => {
    window.location.replace("/");
  };
  const onClickSignup = () => {
    router.push("/signup");
  };

  return (
    <Wrapper>
      <LogoImage
        onClick={onClickToHome}
        src="/img/lostarklogo/lostarklogo4.png"
      />
      {data?.fetchUserLoggedIn ? (
        <div>
          <LoggedinUserName>{`${data?.fetchUserLoggedIn?.name} 님 환영합니다`}</LoggedinUserName>
          <LoginButton onClick={onClickRefresh}>Logout </LoginButton>
        </div>
      ) : (
        <div>
          <LoginButton onClick={onClickToLogin}>Login </LoginButton>
          <LoginButton onClick={onClickSignup}>Sign-up </LoginButton>
        </div>
      )}
    </Wrapper>
  );
}
