import * as JH from "./productCommentQuestion.styles";
import ButtonForProduct from "../../../../../commons/button/buttonForProduct/buttonForProduct";

export default function ProductCommentQuestionPageUI(props) {
  return (
    <JH.CommentWrapper>
      <JH.CommentContentInput
        type="textArea"
        onChange={props.onChangeCommentContents}
      />
      <ButtonForProduct name="댓글 등록" onClick={props.onClickSubmitComment} />
    </JH.CommentWrapper>
  );
}
