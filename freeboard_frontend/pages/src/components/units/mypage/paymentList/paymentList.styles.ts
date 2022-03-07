import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const PointTransactionsWrapper = styled.div`
  width: 100%;
  display: grid;

  border: 1px solid gold;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* margin: 5px 0; */
  }
`;

export const TextRed = styled.span`
  color: red;
`;
export const TextBlue = styled.span`
  color: blue;
`;
