import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMyVariables } from "./BoardWrite.types";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../../../src/commons/types/generated/types";
import { checkFileValidation } from "../../../../commons/libraries/utils";

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

  const [image, setImage] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
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
  // 상세주소 받기
  const onInputAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  //modal press cancel
  const handleCancel = () => {
    setIsSignupModalVisible(false);
  };
  // modal onclickOpen
  const showModal = () => {
    setIsSignupModalVisible(true);
  };
  //modal press OK
  const handleOk = () => {
    setIsSignupModalVisible(false);
  };
  //modal press cancel
  const showCancelModal = () => {
    setIsCancelModalVisible(true);
  };
  const cancelModalPressCancel = () => {
    setIsCancelModalVisible((prev) => !prev);
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
        images: image,
        boardAddress: {
          zipcode,
          address,
          addressDetail,
        },
      },
    });
    // console.log(result);
    router.push(`/boards/${result?.data?.createBoard?._id}`);
  };

  //게시물 수정 함수
  const EditBoard = async () => {
    try {
      const myVariables: IMyVariables = {};

      if (title) myVariables.title = title;
      if (txt) myVariables.contents = txt;
      if (name) myVariables.writer = name;
      if (image) myVariables.images = image;
      if (zipcode || address || addressDetail) {
        myVariables.boardAddress = {};
        if (zipcode) myVariables.boardAddress.zipcode = zipcode;
        if (address) myVariables.boardAddress.address = address;
        if (addressDetail)
          myVariables.boardAddress.addressDetail = addressDetail;
      }

      await updateBoard({
        variables: {
          boardId: String(router.query.detail),
          password: password,
          updateBoardInput: myVariables,
        },
      });

      Modal.success({
        content: `게시물 ${props.isEdit ? "수정" : "등록"}이 완료되었습니다`,
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }

    router.push(`/boards/${router.query.detail}`);
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImage = () => {
    fileRef.current?.click();
  };
  //파일 업로드 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    const isValid = checkFileValidation(file);
    if (!isValid) {
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result?.data?.uploadFile?.url);
      setImage(result?.data?.uploadFile?.url || "");
    } catch (error) {
      alert(error.message);
    }
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
      Modal.error({ content: `내용을 입력해주세요` });
      setIsSignupModalVisible(false);
    } else if (password === "" && !props.isEdit) {
      setPasswordError("비밀번호를 입력해주세요");
      Modal.error({ content: `내용을 입력해주세요` });
      setIsSignupModalVisible(false);
    } else if (title === "" && !props.isEdit) {
      setTitleError("제목을 입력해주세요");
      Modal.error({ content: `내용을 입력해주세요` });
      setIsSignupModalVisible(false);
    } else if (txt === "" && !props.isEdit) {
      setTxtError("내용을 입력해주세요");
      Modal.error({ content: `내용을 입력해주세요` });
      setIsSignupModalVisible(false);
    } else {
      `${props.isEdit ? EditBoard() : submitBoard()}`;
    }
  }

  function ClickCansle(event) {
    `${
      props.isEdit
        ? router.push(`/boards/${router.query.detail}`)
        : router.push(`/boards/`)
    }`;
  }

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
      addressDetail={addressDetail}
      isSignupModalVisible={isSignupModalVisible}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      showCancelModal={showCancelModal}
      isCancelModalVisible={isCancelModalVisible}
      cancelModalPressCancel={cancelModalPressCancel}
      onInputAddressDetail={onInputAddressDetail}
      image={image}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
    />
  );
}
