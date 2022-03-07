import { useRouter } from "next/router";
export default function BoardDetailPage() {
  const router = useRouter();
  return (
    <div>
      <h1>BoardDetailPage, 게시글 아이디는 {router.query.boardId}</h1>
    </div>
  );
}
