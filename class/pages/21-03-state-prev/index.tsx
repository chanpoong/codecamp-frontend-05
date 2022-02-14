import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickIncreaseCount = () => {
    //1 Arrow Function
    // setCount((prev) => prev + 1);

    //2 일반 함수
    // setCount(function (prev) {
    //   return prev + 1;
    // });

    //3 매개변수 바꾸기
    setCount((e) => e + 1);
  };
  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickIncreaseCount}>카운트 증가</button>
    </>
  );
}
