import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 317px;
  left: 360px;
  bottom: 350px;

  padding: 50px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;
export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderTitle = styled.h1`
  width: 100%;

  font-weight: bold;
  font-size: 30px;
`;
export const HeaderSearch = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 100%;

  border-top: none;
  border-left: none;
  border-right: none;

  font-size: 1rem;
`;

export const SearchButton = styled(BsSearch)`
  width: 25px;
  height: 25px;
  margin-left: 10px;

  cursor: pointer;
`;

export const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentsLine = styled.div`
  width: 100%;
  height: 80px;

  border-bottom: 1px solid gray;
  padding: 15px 20px 15px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  :hover {
    color: blue;
  }
`;

export const WrapperList = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
`;

export const itemText = styled.div`
  width: 100%;
  height: auto;
  text-align: center;

  overflow: hidden;
`;
export const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  padding: 10px;
`;

export const SearchedWord = styled.span`
  background-color: ${(props: any) => (props.isMatched ? "#e6a5b5" : "none")};
  border-radius: 3px;
  opacity: 0.9;
  /* background-color: #e6a5b5;
  border-radius: 5px;
  opacity: 0.9; */
`;
