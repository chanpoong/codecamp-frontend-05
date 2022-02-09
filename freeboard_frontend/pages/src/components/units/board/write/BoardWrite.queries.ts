import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $writer: String
    $password: String
    $title: String!
    $contents: String!
    $youtubeUrl: String
    $boardAddress: BoardAddressInput
    $images: [String!]
  ) {
    createBoard(
      createBoardInput: {
        writer: $writer
        password: $password
        title: $title
        contents: $contents
        youtubeUrl: $youtubeUrl
        boardAddress: $boardAddress
        images: $images
      }
    ) {
      _id
      writer
      title
      contents

      createdAt
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
      title
      writer
      contents
      likeCount
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
