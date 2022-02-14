import styled from "@emotion/styled";
import { useRouter } from "next/router";

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
`;
export default function LayoutHeader() {
  const router = useRouter();
  const onClickToLogin = () => {
    router.push("/login");
  };
  const onClickToHome = () => {
    router.push("/");
  };
  return (
    <Wrapper>
      <LogoImage
        onClick={onClickToHome}
        src="/img/lostarklogo/lostarklogo4.png"
      />
      <LoginButton onClick={onClickToLogin}>Login </LoginButton>
    </Wrapper>
  );
}
