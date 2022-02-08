import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 150px;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  height: 120px;
  width: 400px;
`;
export default function LayoutHeader() {
  return (
    <Wrapper>
      <LogoImage src="/img/lostarklogo/lostarklogo4.png" />
    </Wrapper>
  );
}
