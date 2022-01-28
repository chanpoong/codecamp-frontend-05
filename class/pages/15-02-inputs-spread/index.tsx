import { useMutation } from "@apollo/client";

// import { CREATE_BOARD } from './BoardWrite.queries'
import { useState } from "react";

export default function BoardWrite() {
  // const [myWriter, setMyWriter] = useState('')
  // const [myContents, setMyContents] = useState('')
  // const [myTitle, setMyTitle] = useState('')

  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  //   const [qqq] = useMutation(CREATE_BOARD);

  //   const zzz = async () => {
  //     const result = await qqq({
  //       variables: { ...inputs },
  //     });
  //   };

  const onChangeInputs = (event) => {
    // setMyContents(event.target.value)
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <div>스프레드 연산자 연습</div>
      <input type="text" id="writer" onChange={onChangeInputs} />
      <input type="text" id="contents" onChange={onChangeInputs} />
      <input type="text" id="title" onChange={onChangeInputs} />
    </div>
  );
}
