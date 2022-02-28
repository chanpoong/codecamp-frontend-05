import InfiniteScroll from "react-infinite-scroller";
import * as JH from "./productCommentList.styles";
import ProductCommentQuestionPage from "../productCommentQuestion/productCommentQuestion.container";
import ProductCommentEditPage from "../productCommentQuestionEdit/productCommentEdit.container";
import ProductCommentAnswerPage from "../productCommentAnswer/productCommentAnswer.container";
import { DateToString } from "../../../../../commons/libraries/utils";
import { Modal } from "antd";

export default function ProductCommentListUI(props) {
  return (
    <JH.Wrapper>
      <ProductCommentQuestionPage refetch={props.refetch} />
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={false || true}
      >
        {props.data?.fetchUseditemQuestions.map((el, index) => (
          <JH.CommentWrapper key={index}>
            <JH.CommentTitleWrapper>
              <JH.CommentWriter>{el.user.name}</JH.CommentWriter>
              <JH.CommentButtonWrapper>
                <JH.CommentButton onClick={props.onClickOpenAnswer} id={index}>
                  대댓글
                </JH.CommentButton>
                {props.onClickOpenAnswer && (
                  <Modal
                    title={"QnA" + index}
                    visible={props.openAnswerModal[index]}
                    onOk={props.onClickCancelModal}
                    onCancel={props.onClickCancelModal(index)}
                  >
                    <ProductCommentAnswerPage id={el._id} />
                  </Modal>
                )}

                <ProductCommentEditPage
                  id={el._id}
                  defaultValue={el.contents}
                />
                <JH.CommentButton
                  onClick={props.onClickDeleteQuestion}
                  id={el._id}
                >
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
