import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_MINE } from "./freeBoardsOfMine.queries";

export default function FreeBoardsOfMinePage() {
  const { data } = useQuery(FETCH_BOARDS_OF_MINE);
  console.log(data);
  return (
    <div>
      <h1>내가 쓴 게시글</h1>
    </div>
  );
}
