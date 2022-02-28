import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import { CREATE_USED_ITEM_QUESTION } from "./productCommentQuestion.queries";
import { Modal } from "antd";
import ProductCommentQuestionPageUI from "./productCommentQuestion.presenter";

export default function ProductCommentQuestionPage(props) {
  const [contents, setContents] = useState("");
  const router = useRouter();

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeCommentContents = (e) => {
    setContents(e.target.value);
  };

  const onClickSubmitComment = async () => {
    if (!contents) {
      Modal.error({ content: `내용을 입력해주세요` });
      return;
    }
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
    <ProductCommentQuestionPageUI
      onChangeCommentContents={onChangeCommentContents}
      onClickSubmitComment={onClickSubmitComment}
    />
  );
}
