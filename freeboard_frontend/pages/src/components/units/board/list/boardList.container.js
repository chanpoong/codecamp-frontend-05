import ContentsBoardUI from "./boardList.presenter";
import {
  FETCH_BOARDS,
  CREATE_BOARD,
  FETCH_BOARDS_COUNT,
} from "./boardList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  console.log(data);

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const router = useRouter();
  const onClickToBoard = (event) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onClickCreateBoard = (event) => {
    router.push(`/boards/new`);
  };

  return (
    <div>
      <ContentsBoardUI
        data={data}
        onClickToBoard={onClickToBoard}
        onClickCreateBoard={onClickCreateBoard}
        lastPage={lastPage}
        refetch={refetch}
        startPage={startPage}
        setStartPage={setStartPage}
      />
    </div>
  );
}
