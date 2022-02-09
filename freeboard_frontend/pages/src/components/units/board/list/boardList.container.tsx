import ContentsBoardUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./boardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../../../src/commons/types/generated/types";

export default function BoardList() {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { search: keyword },
  });

  const { data: dataBoardsCount, refetch: searchedRefetch } =
    useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const router = useRouter();
  const onClickToBoard = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickCreateBoard = () => {
    router.push(`/boards/new`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    searchedRefetch({ search: data });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
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
        onChangeSearch={onChangeSearch}
        keyword={keyword}
      />
    </div>
  );
}
