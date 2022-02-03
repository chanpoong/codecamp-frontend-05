import { Component, createRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionLifecycleRefPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef = createRef<HTMLInputElement>(); 클래스형 컴포넌트에서 사용하던 ref

  // componentDidMount() {
  //   //처음 랜더링 때 실행될 내용
  //   console.log("Mount");
  //   this.inputRef.current?.focus();
  //   //input tag 선택해서 포커스 동작
  // }
  // componentDidUpdate() {
  //   //리랜더링때는 여기만 실행
  //   console.log("수정 후 리랜더링");
  // }
  // componentWillUnmount() {
  //   //나가기 전 마지막으로 실행될 내용
  //   console.log("여기서 나갈래요");
  // }

  useEffect(() => {
    // componentDidMount 와 동일
    // dependency array(의존성 배열)을 사용하며 -중괄호 뒤 배열-
    // 중괄호 내의 데이터가 바뀔 때만 리랜더링
    // 의존성 배열이 있으나 빈배열인 경우 한번만 실행되고 그 이후로는 실행되지 않는다.
    console.log("Mount");
    inputRef.current?.focus();

    return () => {
      //componentWillUnmount 와 동일
      console.log("여기서 나갈래요");
    };
  }, []);

  useEffect(() => {
    //componentDidUpdate와 비슷한 기능
    // 의존성 배열이 없기 때문에 데이터가 하나라도 바뀌면 매번 리랜더링
    // 최초 실행시에도 한번은 실행되는게 componentDidUpdate와 다른점
    console.log("수정 후 리랜더링");
  }, [count]);

  const onClickCounter = () => {
    console.log(count);
    setCount((prev) => prev + 1);
    console.log("카운터 클릭");
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
