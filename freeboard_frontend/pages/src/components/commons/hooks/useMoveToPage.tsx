import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/boards" | "/products" | "/info" | "/attack";

// interface로 타입을 설정해주면 같은 이름으로 설정한 인터페이스는 별개로 선언을 해도 적용될 때는 하나의 이름으로 적용이 가능하다
// 즉 중첩이 가능하다
//근데 type으로 설정하면 중첩 설정이 불가능하다.

export function UseMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };
  return { moveToPage, visitedPage };
}
