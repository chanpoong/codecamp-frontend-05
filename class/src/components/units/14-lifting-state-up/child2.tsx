export default function Child2(props) {
  return (
    <div>
      <div>자식2 카운트: {props.count}</div>
      <button onClick={props.CountIncrease}>카운트 증가</button>
    </div>
  );
}
