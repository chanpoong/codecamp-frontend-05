import { useQuery, gql } from "@apollo/client";
import { MouseEvent, ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;

interface IProps {
  isMatched: boolean;
}

const HotWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ search: keyword, page: Number(event.target.id) });
  };
  return (
    <div>
      <h1>검색 페이지</h1>
      <input type="text" placeholder="Search" onChange={onChangeSearch} />

      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>

          <span>
            {el.title
              .replaceAll(keyword, `%%&${keyword}%%&`)
              .split("%%&")
              .map((el) => (
                <HotWord key={uuidv4()} isMatched={el === keyword}>
                  {el}
                </HotWord>
              ))}
          </span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index)}>
          {`  ${index + 1}  `}
        </span>
      ))}
    </div>
  );
}
