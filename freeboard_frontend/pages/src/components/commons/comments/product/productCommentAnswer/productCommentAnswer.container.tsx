import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import { DateToString } from "../../../../../commons/libraries/utils";
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
    <div>
      <div>
        <input type="text" onChange={onChangeContents} />
        <button onClick={createAnswer}> 등록 </button>
      </div>
      {data?.fetchUseditemQuestionAnswers?.map((el) => (
        <div key={props.id}>
          <div>{el.user.name}</div>
          {isEdit && commentId === el._id ? (
            <input defaultValue={el.contents} onChange={onChangeEditContents} />
          ) : (
            <div>{el.contents}</div>
          )}

          <div>{DateToString(el.createdAt)}</div>
          {isEdit && commentId === el._id ? (
            <button id={el._id} onClick={EditAnswer}>
              완료
            </button>
          ) : (
            <button id={el._id} onClick={onChangeToEdit}>
              수정
            </button>
          )}

          <button id={el._id} onClick={deleteAnswer}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
