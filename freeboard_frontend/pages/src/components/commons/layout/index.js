import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar";

const LayoutBody = styled.div`
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

// 헤더를 숨기고 싶은 페이지를 설정하기
const HIDDEN_SIDEBAR = ["/"];

// interface IProps {
//   children: ReactChild;
// }
export default function Layout(props) {
  const router = useRouter();
  console.log(router);

  const isHiddenSidebar = HIDDEN_SIDEBAR.includes(router.asPath);
  return (
    <div>
      <LayoutHeader />
      {!isHiddenSidebar && <LayoutBanner />}
      {!isHiddenSidebar && <LayoutNavigation />}
      <BodyWrapper>
        {!isHiddenSidebar && <LayoutSidebar />}

        <LayoutBody>{props.children}</LayoutBody>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}
