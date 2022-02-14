import { Oval } from "react-loader-spinner";

import styled from "@emotion/styled";

const LoadingIconWrapper = styled.div`
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  text-align: center;

  width: auto;
  height: auto;
`;
const Spinner = styled(Oval)`
  height: 150px;
  width: 150px;
`;

//
export default function LoadingPage() {
  // const antIcon =
  return (
    <LoadingIconWrapper>
      <Spinner color="white" />
    </LoadingIconWrapper>
  );
}
