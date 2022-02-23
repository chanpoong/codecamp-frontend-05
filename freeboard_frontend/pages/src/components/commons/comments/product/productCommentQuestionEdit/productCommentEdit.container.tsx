import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../../_app";
import { UPDATE_USED_ITEM_QUESTION } from "./productCommentEdit.queries";

export default function ProductCommentEditPage(props) {
  const { isEdit, setIsEdit } = useContext(GlobalContext);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [updateComment, setUpdateComment] = useState("");
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const onClickUpdateQuestion = async (e) => {
    setIsEdit(true);
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
    <div>
      <button onClick={onClickOpenUpdate}>댓글 수정</button>
      {onClickOpenUpdate && (
        <Modal
          title={"댓글 수정"}
          visible={openUpdateModal}
          onOk={onClickUpdateQuestion}
          onCancel={onClickModalCancel}
        >
          내용:
          <input
            type="textarea"
            onChange={onChangeEditComment}
            maxLength={100}
            defaultValue={props.defaultValue}
          />
        </Modal>
      )}
    </div>
  );
}
