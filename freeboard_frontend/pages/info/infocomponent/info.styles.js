import styled from "@emotion/styled";
import { Popover, Button } from "antd";

export const InfoPageWrapper = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  padding: 10px;
`;

export const InfoDataWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  flex-flow: wrap;
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
    background-color: darkgray;
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
  width: 50px;
  height: 50px;
  padding: 5px;
  margin-right: 5px;
`;

export const TestDiv = styled.div`
  width: auto;
  height: 400px;
`;
