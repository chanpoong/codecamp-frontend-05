import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: relative;
`;
export const HomeImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const HomeImgVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export const MenuChoose = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: auto;
  background: #2e2d40;
  opacity: 0.7;
`;
export const MenuTitle = styled.div`
  width: auto;
  height: auto;

  text-align: center;
  color: #e89700;
  font-weight: bold;
  font-size: 25px;
  border-bottom: 1px solid gray;
`;
export const MenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;
export const MenuButtonLine = styled.input`
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

  :focus {
    border: darkorange 1px solid;
    background-color: white;
    color: black;
  }
`;

export const ServerStatus = styled.span`
  font-weight: bold;
  color: orange;
`;
export const MenuFooter = styled.div`
  border-top: 1px solid gray;
  padding: 15px 0;
  text-align: center;
`;
export const SelectButton = styled.button`
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
