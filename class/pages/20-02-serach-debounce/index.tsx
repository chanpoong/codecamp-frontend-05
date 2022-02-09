import { useQuery, gql } from "@apollo/client";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  // const [searchKeyword, setSearchKeyword] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); // data 또한 state(global state)

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);
  //검색어 state에 저장하는 함수

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  // const onClickSearch = () => {
  //   refetch({ search: searchKeyword, page: 1 });
  //   setKeyword(searchKeyword);
  // };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) });
  };
  return (
    <div>
      <h1>검색 페이지</h1>
      <input type="text" placeholder="Search" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>go</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index)}>
          {`  ${index + 1}  `}
        </span>
      ))}
    </div>
  );
}
