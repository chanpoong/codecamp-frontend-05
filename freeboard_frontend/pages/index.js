import { keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
`;

export default function Home() {
  const aaa = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translate(-15px);
  }
  100% {
    transform: translate(0);
  }
`;
  const boxStyle = css`
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background: black;
    animation: ${aaa} 2s ease infinite;
  `;
  return (
    <>
      <Wrapper>
        <div className="box" css={boxStyle}></div>
      </Wrapper>
    </>
  );
}
