import styled from "@emotion/styled";

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

export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;

  color: #000000;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const BoxTitle = styled.div`
  width: 100%;

  margin-top: 15px;
  margin-bottom: 10px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

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
