import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const InnerWrapper = styled.div`
  width: calc(100vw - 316px);
  height: 97%;
  padding: 15px;
  display: flex;
  flex-direction: column;

  /* height: 3805px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;

  color: #000000;
`;
export const SubInput = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BoxTitle = styled.div`
  width: 70px;
  /* margin-top: 15px;
  margin-bottom: 10px; */
  margin: auto 10px;
  padding: 10px 0;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* line-height: 24px; */
  /* identical to box height */
  text-align: center;

  /* Black */

  color: #000000;
`;
export const SmallInputBox = styled.input`
  padding-left: 15px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const BigInputBox = styled.textarea`
  width: 70%;
  height: 350px;

  overflow: scroll;

  padding-left: 15px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const ImageUploadButton = styled.button`
  border: none;
  cursor: pointer;
  :hover {
    background-color: gold;
  }
`;

export const ErrorMessage = styled.div`
  height: auto;
  color: red;
  line-height: 30px;
`;
