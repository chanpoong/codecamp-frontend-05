export default function Child1(props) {
  return (
    <div>
      <div>자식1 카운트: {props.count}</div>
      <button onClick={props.CountIncrease}>카운트 증가</button>
    </div>
  );
}
