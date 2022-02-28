import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";

import ProductCommentAnswerPageUI from "./productCommentAnswer.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./productCommentAnswer.queries";

export default function ProductCommentAnswerPage(props) {
  const [answerConetents, setAnswerContents] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [commentId, setCommentId] = useState("");
  console.log(editAnswer);
  const { data, refetch } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.id, page: 1 },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const onChangeContents = (e) => {
    setAnswerContents(e.target.value);
  };
  const onChangeEditContents = (e) => {
    setEditAnswer(e.target.value);
  };

  const createAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: answerConetents,
          },
          useditemQuestionId: props.id,
        },
      });
      refetch();
      Modal.success({ content: `답변을 등록했습니다` });
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const deleteAnswer = async (e) => {
    await deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: e.target.id,
      },
    });
    refetch();
    Modal.success({ content: `삭제 완료` });
  };

  const onChangeToEdit = (e) => {
    setIsEdit(true);
    setCommentId(e.target.id);
  };

  const EditAnswer = async (e) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: editAnswer },
          useditemQuestionAnswerId: e.target.id,
        },
      });
      setIsEdit(false);
      refetch();
      Modal.success({ content: "수정 완료" });
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  return (
    <ProductCommentAnswerPageUI
      data={data}
      onChangeContents={onChangeContents}
      createAnswer={createAnswer}
      isEdit={isEdit}
      commentId={commentId}
      onChangeEditContents={onChangeEditContents}
      EditAnswer={EditAnswer}
      onChangeToEdit={onChangeToEdit}
      deleteAnswer={deleteAnswer}
    />
  );
}
