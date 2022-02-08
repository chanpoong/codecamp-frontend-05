import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      writer
      title
      contents
      likeCount
      createdAt
      _id
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(CreateBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      likeCount
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
