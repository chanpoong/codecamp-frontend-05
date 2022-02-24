import styled from "@emotion/styled";
import { Switch } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const Sidebar = styled.div`
  z-index: 2;
  width: 140px;
  padding: 20px 15px;
  position: fixed;
  right: 30px;
  /* left: 100vw; */
  top: 50%;
  transform: translate(0, -50%);
  overflow: hidden;
  background: #faf7c5;
  border-radius: 20px;

  p {
    font-weight: 700;
  }
`;
export const SidebarItems = styled.div`
  width: 100%;
  /* display: grid; */

  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
`;
export const MypageWrapper = styled.div`
  width: calc(100vw - 316px);
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;

  /* height: 3805px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ShowSold = styled.span`
  color: red;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  padding: 5px;
`;

export const ToggleSwitch = styled(Switch)``;
export const SoldListWrapper = styled.div`
  width: 100%;
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
`;
export const ItemBoxInfo = styled.div`
  padding: 5px;
  background-color: #f7f6dc;
`;
export const ItemInfoDate = styled.div`
  color: gray;
`;
