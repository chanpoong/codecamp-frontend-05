import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../../_app";
import ProductCommentEditPageUI from "./productCommentEdit.presenter";
import { UPDATE_USED_ITEM_QUESTION } from "./productCommentEdit.queries";

export default function ProductCommentEditPage(props) {
  const { isEdit, setIsEdit } = useContext(GlobalContext);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [updateComment, setUpdateComment] = useState("");
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const onClickUpdateQuestion = async (e) => {
    setIsEdit(true);
    if (updateComment.length === 0) {
      Modal.error({ content: `내용을 입력해주세요` });
      return;
    }
    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.id,
          updateUseditemQuestionInput: {
            contents: updateComment,
          },
        },
      });
      Modal.success({ content: `댓글을 수정했습니다` });
      setOpenUpdateModal(false);
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };
  const onChangeEditComment = (e) => {
    setUpdateComment(e.target.value);
  };
  const onClickOpenUpdate = () => {
    setOpenUpdateModal(true);
  };
  const onClickModalCancel = () => {
    setOpenUpdateModal(false);
  };

  return (
    <ProductCommentEditPageUI
      onClickOpenUpdate={onClickOpenUpdate}
      openUpdateModal={openUpdateModal}
      onClickUpdateQuestion={onClickUpdateQuestion}
      onClickModalCancel={onClickModalCancel}
      onChangeEditComment={onChangeEditComment}
    />
  );
}
