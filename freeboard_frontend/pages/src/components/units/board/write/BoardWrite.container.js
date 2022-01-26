import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import DaumPostcode from "react-daum-postcode";

export default function MyPage(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [txt, setTxt] = useState("");
  const [txtError, setTxtError] = useState("");
  const [getYoutubeUrl, setYoutubeUrl] = useState("");
  // const [contentsNum, setNumber] = useState('')

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");
  //modal 활성 함수
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  // 우편번호 검색 함수
  const onCompleteDaumPostCode = (data) => {
    setAddress(data.address);
    setZipCode(data.zonecode);
    onToggleModal();
  };

  // 게시물 생성 함수
  const submitBoard = async () => {
    const result = await createBoard({
      variables: {
        writer: name,
        password: password,
        title: title,
        contents: txt,
        youtubeUrl: getYoutubeUrl,
        boardAddress: {
          zipcode,
          address,
        },
      },
    });
    // console.log(result);
    router.push(`/boards/${result?.data?.createBoard?._id}`);
  };

  //게시물 수정 함수
  const EditBoard = async () => {
    try {
      const myVariables = {};

      if (title) myVariables.title = title;
      if (txt) myVariables.contents = txt;
      if (name) myVariables.writer = name;
      if (zipcode || address) {
        myVariables.boardAddress = {};
        if (zipcode) myVariables.boardAddress.zipcode = zipcode;
        if (address) myVariables.boardAddress.address = address;
        // if(zipcode) myVariables.boardAddress.zipcode=zipcode
      }

      await updateBoard({
        variables: {
          boardId: String(router.query.aaa),
          password: password,
          updateBoardInput: myVariables,
        },
      });

      console.log(myVariables);
    } catch (error) {
      alert(error.message);
    }

    router.push(`/boards/${router.query.aaa}`);
  };

  //빈칸체크 후 공백이아니라면 에러메세지 삭제
  function nameCheck(event) {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
      if (event.target.value && title && txt && password) {
        setIsActive(true);
      } else if (
        event.target.value === "" ||
        title === "" ||
        txt === "" ||
        password === ""
      ) {
        setIsActive(false);
      }
    } else if (event.target.value === "") {
      setIsActive(false);
    }
  }

  function YoutubeUrlCheck(event) {
    setYoutubeUrl(event.target.value);
  }

  function passwordCheck(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
      if (name && password && txt && event.target.value) {
        setIsActive(true);
      } else if (
        name === "" ||
        password === "" ||
        txt === "" ||
        event.target.value === ""
      ) {
        setIsActive(false);
      }
    } else if (event.target.value === "") {
      setIsActive(false);
    }
  }

  function titleCheck(event) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (name && password && event.target.value && txt) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function txtCheck(event) {
    setTxt(event.target.value);

    if (event.target.value !== "") {
      setTxtError("");
      if (name && title && event.target.value && password) {
        setIsActive(true);
      } else if (
        name === "" ||
        title === "" ||
        event.target.value === "" ||
        password === ""
      ) {
        setIsActive(false);
      }
    } else if (event.target.value === "") {
      setIsActive(false);
    }
  }

  // 공란 체크 함수 && !props.isEdit
  function ValueCheck(event) {
    if (name === "" && !props.isEdit) {
      setNameError("작성자를 입력해주세요.");
    } else if (password === "" && !props.isEdit) {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (title === "" && !props.isEdit) {
      setTitleError("제목을 입력해주세요");
    } else if (txt === "" && !props.isEdit) {
      setTxtError("내용을 입력해주세요");
    } else {
      if (confirm("저장하시겠습니까?") === true) {
        `${props.isEdit ? EditBoard() : submitBoard()}`;
        alert(`게시물 ${props.isEdit ? "수정" : "등록"}이 완료되었습니다`);
      } else {
        return false;
      }
    }
  }
  function ClickCansle(event) {
    if (
      confirm("작성을 취소하시겠습니까? \n작성중이던 내용은 삭제됩니다") ===
      true
    ) {
      `${
        props.isEdit
          ? router.push(`/boards/${router.query.aaa}`)
          : router.push(`/boards/`)
      }`;
    } else {
      return false;
    }
  }
  console.log(zipcode);
  console.log(props.data?.fetchBoard.boardAddress?.zipcode);
  return (
    <BoardWriteUI
      name={name}
      title={title}
      txt={txt}
      password={password}
      nameCheck={nameCheck}
      passwordCheck={passwordCheck}
      titleCheck={titleCheck}
      txtCheck={txtCheck}
      ValueCheck={ValueCheck}
      ClickCansle={ClickCansle}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      txtError={txtError}
      isActive={isActive}
      isEdit={props.isEdit}
      EditBoard={EditBoard}
      data={props.data}
      YoutubeUrlCheck={YoutubeUrlCheck}
      isModalVisible={isModalVisible}
      onCompleteDaumPostCode={onCompleteDaumPostCode}
      onToggleModal={onToggleModal}
      address={address}
      zipcode={zipcode}
    />
  );
}
