import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import * as JH from "./productCommentQuestion.styles";
import ButtonForProduct from "../../../../../commons/button/buttonForProduct/buttonForProduct";

import { CREATE_USED_ITEM_QUESTION } from "./productCommentQuestion.queries";
import { Modal } from "antd";

export default function ProductCommentQuestionPage(props) {
  const [contents, setContents] = useState("");
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeCommentContents = (e) => {
    setContents(e.target.value);
  };

  const onClickSubmitComment = async () => {
    await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: String(router.query.detail),
      },
    });
    props.refetch();
    Modal.success({ content: `댓글을 등록했습니다.` });
  };
  return (
    <JH.CommentWrapper>
      <JH.CommentContentInput
        type="textArea"
        onChange={onChangeCommentContents}
      />
      <ButtonForProduct name="댓글 등록" onClick={onClickSubmitComment} />
    </JH.CommentWrapper>
  );
}
