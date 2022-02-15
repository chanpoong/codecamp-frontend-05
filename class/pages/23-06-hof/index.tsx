import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (el: string) => (e: MouseEvent<HTMLDivElement>) => {
    console.log(`hof:${el}`);
  };
  return (
    <div>
      <div>
        <h1>HOF 연습 페이지</h1>
        {["철수", "영희", "훈이"].map((el, index) => (
          <div key={index} onClick={onClickChild(el)}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}
