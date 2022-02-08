import { useEffect, useState } from "react";
import MyfirebaseListUI from "./attackBoardList.presenter";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { FirebaseApp } from "../../../_app";
import { useRouter } from "next/router";

export default function MyfirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(FirebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    }
    fetchBoards();
  }, []);

  function onClickMoveToBoardNew() {
    router.push("/attack/new");
  }

  return (
    <MyfirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}
