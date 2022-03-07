import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.boardData?.title} />
        <meta property="og:description" content={props.boardData?.contents} />
        <meta property="og:image" content={props.boardData?.images[0]} />
      </Head>
      <div>
        <h1>BoardDetailPage, 게시글 아이디는 {router.query.id}입니다</h1>
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
      images
    }
  }
`;

//해당 함수가 페이지 내부에 있다면 가장 우선 실행되며 default function은 그 다음으로 실행된다.
export const getServerSideProps = async (context) => {
  // pages 폴더의 파일에서만 요청이 가능하며 함수의 이름은 바꿀 수 없음
  // SSR을 위한 데이터를 요청할 부분
  // query등으로 BE에 요청
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql", // 데이터를 요청할 BE서버 주소
    FETCH_BOARD, // 사용할 쿼리
    { boardId: context.query.id } // boardId를 context로 받아오며 context는 이 함수에서 제공
  );

  return {
    //이곳의 data가 위 default function 함수에 props로 전달된다.
    props: {
      boardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
        // 혹은 ...result로 한번에 넘겨주는 것도 가능
      },
    },
  };
};
