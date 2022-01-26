import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Mypage from "../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      youtubeUrl
      boardAddress {
        _id
        address
        zipcode
      }
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.aaa) },
  });

  return <Mypage isEdit={true} data={data} />;
}
