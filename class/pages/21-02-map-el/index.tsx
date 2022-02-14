export default function MapElPage() {
  //     //1 기본
  //     ["철수", "영희", "훈이"].forEach((el, index) => {
  //         console.log(el, index);
  //       });

  //       //2 매개변수 변경
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log(asdf, qwer);
  //   });

  //3 함수 선언식
  //   ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
  //     console.log(asdf, qwer);
  //   });

  // el과 index의 위치를 바꿔보기
  ["철수", "영희", "훈이"].forEach(function (index, el) {
    console.log(index, el);
  });

  return <></>;
}
