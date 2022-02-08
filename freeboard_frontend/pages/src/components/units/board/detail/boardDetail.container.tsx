import BoardDetailUI from "./boardDetail.presenter";
import {
  FETCH_BOARD,
  UPDATE_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./boardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.detail) },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  //modal
  const onToggleModal = () => {
    setIsCancelModalVisible((prev) => !prev);
  };
  //modal press cancel
  const cancelModalPressCancel = () => {
    setIsCancelModalVisible((prev) => !prev);
  };
  //modal press OK
  const handleOk = () => {
    setIsCancelModalVisible((prev) => !prev);
    onClickDelete(Event);
  };

  function YoutubeUrlCheck(event) {
    setYoutubeUrl(event.target.value);
  }

  const onClickUpdateBoard = (event) => {
    router.push(`/boards/${String(router.query.detail)}/edit`);
  };
  //게시글 삭제
  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        boardId: String(router.query.detail),
      },
    });
    router.push(`/boards`);
  };
  const onClickToBoard = (event) => {
    router.push(`/boards`);
  };
  //게시글 좋아요
  const onClickLikeBoard = async () => {
    await likeBoard({
      variables: { boardId: String(router.query.detail) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.detail) },
        },
      ],
    });
  };
  //게시글 싫어요
  const onClickDisLikeBoard = async () => {
    await dislikeBoard({
      variables: { boardId: String(router.query.detail) },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: String(router.query.detail) },
        },
      ],
    });
  };
  console.log(data);
  return (
    <BoardDetailUI
      data={data}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickDelete={onClickDelete}
      onClickToBoard={onClickToBoard}
      onClickDisLikeBoard={onClickDisLikeBoard}
      onClickLikeBoard={onClickLikeBoard}
      YoutubeUrlCheck={YoutubeUrlCheck}
      youtubeUrl={youtubeUrl}
      onToggleModal={onToggleModal}
      cancelModalPressCancel={cancelModalPressCancel}
      handleOk={handleOk}
      isCancelModalVisible={isCancelModalVisible}
    />
  );
}
