import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./boardCommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListPageUI from "./boardCommentList.presenter";
import React, { useState } from "react";
import Modal from "antd/lib/modal/Modal";

export default function BoardCommentListPage() {
  const router = useRouter();

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentRating, setCommentRating] = useState(0.0);
  const [commentContents, setCommentContents] = useState("");
  const [commentId, setCommentId] = useState("");

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { boardId: String(router.query.detail), page: 1 },
  });

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onChangeCommentWriter(event) {
    setCommentWriter(event.target.value);
  }
  function onChangeCommentPassword(event) {
    setCommentPassword(event.target.value);
  }
  function onChangeCommentContents(event) {
    setCommentContents(event.target.value);
  }
  function onChangeCommentRating(value) {
    setCommentRating(value);
  }

  //modal
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [commentPasswordForDelete, setCommentPasswordForDelete] = useState("");
  const onToggleModal = (event) => {
    setCommentId(event?.target.id);
    setIsDeleteModalVisible((prev) => !prev);
  };
  //modal press cancel
  const deleteCommentModalCancel = () => {
    setIsDeleteModalVisible((prev) => !prev);
  };
  //modal press OK
  const handleOk = () => {
    setIsDeleteModalVisible((prev) => !prev);
    deleteComment();
  };
  const passwordForDelete = (event) => {
    setCommentPasswordForDelete(event.target.value);
  };
  //댓글 작성 함수
  const submitComment = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: String(router.query.detail),
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContents,
            rating: commentRating,
          },
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: String(router.query.detail) },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // 댓글 삭제 함수
  const deleteComment = async (event) => {
    try {
      await deleteBoardComment({
        variables: {
          password: commentPasswordForDelete,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: String(router.query.detail) },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardCommentListPageUI
      data={data}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentRating={onChangeCommentRating}
      deleteComment={deleteComment}
      submitComment={submitComment}
      commentWriter={commentWriter}
      commentPassword={commentPassword}
      commentRating={commentRating}
      commentContents={commentContents}
      onToggleModal={onToggleModal}
      deleteCommentModalCancel={deleteCommentModalCancel}
      handleOk={handleOk}
      isDeleteModalVisible={isDeleteModalVisible}
      passwordForDelete={passwordForDelete}
      fetchMore={fetchMore}
    />
  );
}
