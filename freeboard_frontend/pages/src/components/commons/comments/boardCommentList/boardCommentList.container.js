import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./boardCommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListPageUI from "./boardCommentList.presenter";
import React, { useState } from "react";
import { Modal } from "antd";

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
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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

  //modal for delete
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

  //modal for update
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [commentPasswordForUpdate, setCommentPasswordForUpdate] = useState("");

  //modal press cancel
  const updateCommentModalCancel = () => {
    setIsUpdateModalVisible((prev) => !prev);
  };
  //modal press OK
  const updateHandleOk = () => {
    setIsUpdateModalVisible((prev) => !prev);
    editComment();
  };
  const passwordForUpdate = (event) => {
    setCommentPasswordForUpdate(event.target.value);
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
            variables: { boardId: String(router.query.detail), page: 1 },
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
            variables: { boardId: String(router.query.detail), page: 1 },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  // 댓글 수정 함수
  const editComment = async (event) => {
    try {
      const commentVariables = {};

      if (commentContents) commentVariables.contents = commentContents;
      if (commentRating) commentVariables.rating = commentRating;

      await updateBoardComment({
        variables: {
          boardCommentId: commentId,
          password: commentPasswordForUpdate,
          updateBoardCommentInput: commentVariables,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: {
              boardId: String(router.query.detail),
              page: 1,
            },
          },
        ],
      });
      Modal.success({ content: "댓글 수정이 완료되었습니다." });

      // setCommentPassword("");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  //인피니티 스크롤 댓글 불러오기 함수
  const onLoadMore = () => {
    if (!data) return; // 불러올 데이터가 없으면 실행하지 않게

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
      },
      // Math.ceil(data.fetchBoards.length / 10)가 현재 페이지를 나타냄
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        // 더 불러올 데이터가 없으면 이전 데이터만 보여주기
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        }; // 이전 글, 다음글 합쳐서 리턴
      },
    });
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
      onLoadMore={onLoadMore}
      isUpdateModalVisible={isUpdateModalVisible}
      setIsUpdateModalVisible={setIsUpdateModalVisible}
      updateCommentModalCancel={updateCommentModalCancel}
      updateHandleOk={updateHandleOk}
      passwordForUpdate={passwordForUpdate}
      editComment={editComment}
      setCommentId={setCommentId}
    />
  );
}
