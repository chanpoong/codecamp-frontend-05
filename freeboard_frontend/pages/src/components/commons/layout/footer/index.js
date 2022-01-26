import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100px;
  background-color: black;
  padding-top: 15px;
`;
const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FooterContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FooterContent = styled.div`
  margin: 5px 5px 5px 5px;
  padding-right: 10px;
  border-right: 1px solid grey;

  color: white;
`;
const FooterContentRightEnd = styled.div`
  margin: 5px 5px 5px 5px;
  padding-right: 10px;

  color: white;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <FooterMenu>
        <FooterContentBox>
          <FooterContent>이용약관</FooterContent>
          <FooterContent>운영정책</FooterContent>
          <FooterContent>청소년 보호 정책</FooterContent>
          <FooterContentRightEnd>고객센터</FooterContentRightEnd>
        </FooterContentBox>
        <FooterContentRightEnd>
          © Smilegate RPG & Smilegate Stove All rights reserved.
        </FooterContentRightEnd>
      </FooterMenu>
    </Wrapper>
  );
}
