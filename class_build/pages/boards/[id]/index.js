import { useRouter } from "next/router";
import Head from "next/head";
export default function BoardDetailPage() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content="goranii's Boards Preview" />
        <meta property="og:description" content="Welcome Drink/ " />
        <meta
          property="og:image"
          content="https://dullyshin.github.io/2018/08/30/HTML-imgLink/#lg=1&slide=0"
        />
      </Head>
      <div>
        <h1>BoardDetailPage, 게시글 아이디는 {router.query.boardId}입니다</h1>
      </div>
    </div>
  );
}
