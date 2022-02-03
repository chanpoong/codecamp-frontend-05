import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class ClassCounterPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state = {
    count: 0,
  };
  componentDidMount() {
    //처음 랜더링 때 실행될 내용
    console.log("Mount");
    this.inputRef.current?.focus();
    //input tag 선택해서 포커스 동작
  }
  componentDidUpdate() {
    //리랜더링때는 여기만 실행
    console.log("수정 후 리랜더링");
  }
  componentWillUnmount() {
    //나가기 전 마지막으로 실행될 내용
    console.log("여기서 나갈래요");
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    console.log("카운터 클릭");
  };
  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}
