import styled from "@emotion/styled";
import { Menu, Switch } from "antd";
import {
  AppstoreOutlined,
  FlagOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: auto;
  width: 250px;
  background-color: lightgrey;
`;
//메뉴 바
const { SubMenu } = Menu;

const SideBarMenu = styled(Menu)`
  height: 1300px;
  width: 250px;
  background-color: lightgrey;
  max-height: 1300px;
`;
const SideBarSubMenu = styled(SubMenu)`
  max-height: 1300px;
`;
export default function LayoutSidebar() {
  const router = useRouter();

  const onClickToSearchInfo = () => {
    router.push("/info");
  };

  const onClickToBoards = () => {
    router.push("/boards");
  };

  return (
    <Wrapper>
      <SideBarMenu
        style={{ width: 256 }}
        // defaultOpenKeys={["sub1"]}
        // selectedKeys={[state.current]}
        mode="inline"
      >
        <SideBarSubMenu key="sub1" icon={<FlagOutlined />} title="자유 게시판">
          <Menu.Item key="1" onClick={onClickToBoards}>
            자유 게시판
          </Menu.Item>
        </SideBarSubMenu>
        <SideBarSubMenu key="sub4" icon={<InboxOutlined />} title="거래 게시판">
          <Menu.Item key="13">루페온</Menu.Item>
          <Menu.Item key="14">아브렐슈드</Menu.Item>
          <Menu.Item key="15">실리안</Menu.Item>
          <Menu.Item key="16">카마인</Menu.Item>
          <Menu.Item key="17">니나브</Menu.Item>
          <Menu.Item key="18">카제로스</Menu.Item>
          <Menu.Item key="19">카단</Menu.Item>
          <Menu.Item key="20">아만</Menu.Item>
        </SideBarSubMenu>
        <SideBarSubMenu
          key="sub2"
          icon={<AppstoreOutlined />}
          title="정보 검색"
        >
          <Menu.Item key="9" onClick={onClickToSearchInfo}>
            정보 검색
          </Menu.Item>

          {/* <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">군단장 (노말)</Menu.Item>
            <Menu.Item key="12">군단장 (하드)</Menu.Item>
          </SubMenu> */}
        </SideBarSubMenu>
      </SideBarMenu>
    </Wrapper>
  );
}
