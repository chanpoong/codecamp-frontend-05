import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickDelete = (el: string) => async () => {
    await deleteBoard({
      variables: { boardId: el },
      update(cache, { data }) {
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              //prev안에는 기존에 있던 게시글 데이터가 존재, 삭제 후 '기존 데이터-1' 가 되어야함
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId // el._id 로 데이터를 읽어올 수 없으므로 readField를 통해 데이터를 읽어와야함
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };
  const onClickSubmit = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "goRan",
          password: "123",
          title: "its",
          contents: "LunchTime",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        }); // 수정(modify)를 통해 setState와 비슷한 효과를 가짐
      },
    });
  };
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>Delete</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>Submit</button>
    </div>
  );
}
