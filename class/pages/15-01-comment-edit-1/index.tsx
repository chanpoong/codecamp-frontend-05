import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickEdit = (event) => {
    const aaa = isEdits;
    aaa[event.target.id] = true;
    setIsEdits(aaa);
  };

  return (
    <div>
      <h1>댓글 수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {isEdits[index] === false && (
            <div>
              <span>
                {el.title} {el.writer}
              </span>
              <button id={index} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] === true && (
            <div>
              <div>===============</div>
              <div>수정하기 화면</div>
              <div>===============</div>
            </div>
          )}
        </div>
      ))}
    </div>
    // click state가 true이면 수정화면 띄우기
    // false이면 안띄우기(기본)
    //댓글 수정 부분을 컴포넌트로 따로 빼고 그 페이지에서 스테이트를 만들어서 할당하기로
    //스테이트 끌어올리기 사용
  );
}
