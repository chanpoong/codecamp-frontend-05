import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
} from "firebase/firestore/lite";
import { FirebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    //firebase에 한 줄 등록하기
    const board = collection(getFirestore(FirebaseApp), "board");
    await addDoc(board, {
      writer: "Owen",
      title: "Title",
      contents: "Aussie",
    });
    //collection(접속정보, 컬렉션이름)
  };

  const onclickFetch = async () => {
    //firebase에 등록된 데이터 조회하기
    const board = collection(getFirestore(FirebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  };
  return (
    <>
      <h2>파이어베이스 연습 페이지입니다.</h2>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onclickFetch}>조회하기</button>
    </>
  );
}
