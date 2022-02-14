import LayoutBanner from "./banner/index";
import LayoutFooter from "./footer/index";
import LayoutHeader from "./header/index";
import LayoutNavigation from "./navigation/index";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar/index";

const LayoutBody = styled.div`
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// 사이드바를 숨기고 싶은 페이지를 설정하기
const HIDDEN_SIDEBAR = ["/", "/login", "/signup"];

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
