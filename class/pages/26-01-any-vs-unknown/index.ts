// any type
export const getAny = (args: any) => {
  const answer = args + 2;

  return answer;
};

const myResult1 = getAny("철수");

console.log(myResult1);

// unknown type
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else {
    return "숫자를 입력해주세요";
  }
};
const myResult2 = getUnknown("영희");
console.log(myResult2);

//any, unknown 둘 다 타입을 모를 때 사용
// any는 JS와 동일
//unknown은 개발자에게 경고. 타입을 모르더라도 조금 더 안전하게(오류가 발생하지 않는 방향으로) 코딩하라는 뜻
