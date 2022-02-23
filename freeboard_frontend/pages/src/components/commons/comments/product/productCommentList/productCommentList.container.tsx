import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DateToString } from "../../../../../commons/libraries/utils";
import {
  FETCH_USED_ITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
} from "./productCommentList.queries";
import _ from "lodash";
import InfiniteScroll from "react-infinite-scroller";
import * as JH from "./productCommentList.styles";
import ProductCommentQuestionPage from "../productCommentQuestion/productCommentQuestion.container";
import { Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../../../_app";
import ProductCommentEditPage from "../productCommentQuestionEdit/productCommentEdit.container";
import ProductCommentAnswerPage from "../productCommentAnswer/productCommentAnswer.container";

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
    await deleteUseditemQuestion({
      variables: {
        useditemQuestionId: String(e.target.id),
      },
    });
    Modal.success({ content: `댓글을 삭제했습니다.` });
    refetch();
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
  // useEffect(() => {
  //   setOpenAnswerModal(
  //     new Array(data?.fetchUseditemQuestions?.length ?? 0).fill(false)
  //   );
  // }, [data]);

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
    <JH.Wrapper>
      <ProductCommentQuestionPage refetch={refetch} />
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={false || true}
      >
        {data?.fetchUseditemQuestions.map((el, index) => (
          <JH.CommentWrapper key={index}>
            <JH.CommentTitleWrapper>
              <JH.CommentWriter>{el.user.name}</JH.CommentWriter>
              <JH.CommentButtonWrapper>
                <JH.CommentButton onClick={onClickOpenAnswer} id={index}>
                  대댓글
                </JH.CommentButton>
                {onClickOpenAnswer && (
                  <Modal
                    title={"QnA" + index}
                    visible={openAnswerModal[index]}
                    onOk={onClickCancelModal}
                    onCancel={onClickCancelModal(index)}
                  >
                    <ProductCommentAnswerPage id={el._id} />
                  </Modal>
                )}

                <ProductCommentEditPage
                  id={el._id}
                  defaultValue={el.contents}
                />
                <JH.CommentButton onClick={onClickDeleteQuestion} id={el._id}>
                  댓글 삭제
                </JH.CommentButton>
              </JH.CommentButtonWrapper>
            </JH.CommentTitleWrapper>

            <JH.CommentContents>{el.contents}</JH.CommentContents>
            <JH.CommentCreatedAt>
              {DateToString(el.createdAt)}
            </JH.CommentCreatedAt>
          </JH.CommentWrapper>
        ))}
      </InfiniteScroll>
    </JH.Wrapper>
  );
}
