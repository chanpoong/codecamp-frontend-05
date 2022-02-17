import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import { UseMoveToPage } from "./src/components/commons/hooks/useMoveToPage";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background: black;
  position: relative;
`;
const HomeImg = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
`;
const HomeImgVideo = styled.video`
  width: 100%;
  height: 100%;
`;
const Video = styled.source`
  width: 100%;
  height: 100%;
`;

const MenuChoose = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: auto;
  background: #2e2d40;
  opacity: 0.7;
`;
const MenuTitle = styled.div`
  width: auto;
  height: auto;

  text-align: center;
  color: aliceblue;
  font-weight: bold;
  font-size: 25px;
  border-bottom: 1px solid gray;
`;
const MenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;
const MenuButtonLine = styled.button`
  width: 100%;
  margin: 5px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: #bec0c4;
  font-weight: bold;
  cursor: pointer;

  background-color: #35344a;
  border: none;

  :hover {
    background-color: white;
    color: black;
  }
  :focus {
    border: darkorange 1px solid;
  }
`;

const ServerStatus = styled.span`
  font-weight: bold;
  color: orange;
`;
const MenuFooter = styled.div`
  border-top: 1px solid gray;
  padding: 15px 0;
  text-align: center;
`;
const SelectButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;

  border: none;
  color: #b88423;
  font-weight: bold;
  background-color: #61605d;
  :hover {
    background-color: grey;
    color: #e89700;
  }
`;

export default function Home() {
  const router = useRouter();
  const [toMovePage, setToMovePage] = useState("/");

  const onClickToInfo = () => {
    setToMovePage("/info");
  };
  const onClickToBoard = () => {
    setToMovePage("/boards");
  };
  const onClickToProducts = () => {
    setToMovePage("/products");
  };
  const onClickToAttack = () => {
    setToMovePage("/attack");
  };

  const onClickToMove = () => {
    router.push(`/${toMovePage}`);
  };

  return (
    <>
      <Wrapper>
        <HomeImg>
          <HomeImgVideo muted autoPlay loop>
            <Video src="/img/home/kadanlogin.mp4" type="video/mp4" />
          </HomeImgVideo>
        </HomeImg>

        <MenuChoose>
          <MenuTitle>채널 선택</MenuTitle>
          <MenuButtonWrapper>
            <MenuButtonLine onClick={onClickToInfo}>
              정보 검색
              <ServerStatus>혼잡</ServerStatus>
            </MenuButtonLine>
            <MenuButtonLine onClick={onClickToBoard}>
              자유 게시판
              <ServerStatus>혼잡</ServerStatus>
            </MenuButtonLine>
            <MenuButtonLine onClick={onClickToProducts}>
              거래 게시판
              <ServerStatus>혼잡</ServerStatus>
            </MenuButtonLine>
            <MenuButtonLine onClick={onClickToAttack}>
              공략 게시판
              <ServerStatus>혼잡</ServerStatus>
            </MenuButtonLine>
          </MenuButtonWrapper>
          <MenuFooter>
            <SelectButton onClick={onClickToMove}>입장</SelectButton>
          </MenuFooter>
        </MenuChoose>
      </Wrapper>
    </>
  );
}
