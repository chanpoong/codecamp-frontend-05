import styled from "@emotion/styled";

export const InputPic = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  width: 78px;
  height: 78px;
  background: #bdbdbd;

  max-width: 150px;
  max-height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px black solid;
  margin-right: 10px;
  cursor: pointer;
`;

export const Picture1 = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const Picture2 = styled.input`
  /* font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  background: none;
  border: none;
  cursor: pointer;

  color: #4f4f4f; */
  display: none;
`;
