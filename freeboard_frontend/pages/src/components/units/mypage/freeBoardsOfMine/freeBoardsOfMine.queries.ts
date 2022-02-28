import { gql } from "@apollo/client";

export const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine {
    fetchBoardsOfMine {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      user {
        _id
        name
      }
    }
  }
`;
