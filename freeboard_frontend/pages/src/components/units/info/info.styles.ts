import styled from "@emotion/styled";
import { Popover, Button } from "antd";

export const InfoPageWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 10px 10px 10px;
  opacity: 0.9;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;
export const NicknameTitle = styled.span`
  color: white;
  margin-right: 20px;
`;
export const InputNickname = styled.input`
  color: black;
`;
export const InfoDataWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const InfoDataDivideWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 15px 10px;
  background-color: #1a1a2b;
`;
export const InfoDataWrapperLeft = styled.div`
  width: auto;
  height: auto;
  display: grid;
`;

export const InfoDataWrapperRight = styled.div`
  width: auto;
  height: auto;
`;

export const ItemInfo = styled(Popover)`
  width: auto;

  height: auto;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  font-weight: bold;

  border: none;
  margin: 5px;
  cursor: pointer;
  overflow: clip;

  :hover {
    background-color: #b07207;
    color: white;
  }
`;

export const ItemInfoWrapper = styled.div`
  width: auto;
  max-width: 300px;

  height: auto;
  max-height: 400px;
  overflow: auto;
`;

export const InfoQuality = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const InfoEquipmentBasic = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;
export const InfoEquipmentPlus = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;
export const TrifordWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const Triford = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SetOptionWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const SetOptionTitle = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;
export const SetOptionDetail = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const AccOptionWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const BraceletOptionWrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;
export const BraceletOptionDetail = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
`;

export const ItemIcon = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
  margin-right: 5px;
  background-color: #e8e0d3;
`;
export const ItemBtn = styled.button`
  background-color: #232336;
  width: auto;
  height: auto;
  border: #06061f 1px solid;
  color: #665f52;
`;
export const ItemBtnTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  min-width: 150px;
`;
