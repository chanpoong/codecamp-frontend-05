import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export const CommentWrapper = styled.div`
  border: 1px solid gray;
  padding: 3px;
  overflow: scroll;
`;
export const CommentTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CommentButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentWriter = styled.div`
  font-weight: bold;
  padding: 3px;
`;
export const CommentButton = styled.button`
  margin: 1px;
  border: none;
  :hover {
    background-color: gold;
  }
`;
export const CommentContents = styled.div`
  padding: 3px;
`;

export const CommentCreatedAt = styled.div`
  color: gray;
  padding: 3px;
`;
