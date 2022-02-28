import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./productCommentList.queries";
import _ from "lodash";
import { Modal } from "antd";
import { useState } from "react";
import ProductCommentListUI from "./productCommentList.presenter";

export default function ProductCommentList() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.detail), page: 1 },
  });

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [openAnswerModal, setOpenAnswerModal] = useState<boolean[]>(
    new Array(1000).fill(false)
  );

  const onClickDeleteQuestion = async (e) => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: String(e.target.id),
        },
      });
      Modal.success({ content: `댓글을 삭제했습니다.` });
      refetch();
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickOpenAnswer = (index) => {
    const newArr = [...openAnswerModal];
    newArr[Number(index.target.id)] = true;
    setOpenAnswerModal(newArr);
  };

  const onClickCancelModal = (idx) => (index) => {
    const newArr = [...openAnswerModal];
    newArr[Number(idx)] = false;
    setOpenAnswerModal(newArr);
  };

  return (
    <ProductCommentListUI
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      onClickOpenAnswer={onClickOpenAnswer}
      openAnswerModal={openAnswerModal}
      onClickCancelModal={onClickCancelModal}
      onClickDeleteQuestion={onClickDeleteQuestion}
    />
  );
}
