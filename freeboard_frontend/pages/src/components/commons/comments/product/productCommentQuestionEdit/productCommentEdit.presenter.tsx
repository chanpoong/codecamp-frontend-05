import { Modal } from "antd";

export default function ProductCommentEditPageUI(props) {
  return (
    <div>
      <button onClick={props.onClickOpenUpdate}>댓글 수정</button>
      {props.onClickOpenUpdate && (
        <Modal
          title={"댓글 수정"}
          visible={props.openUpdateModal}
          onOk={props.onClickUpdateQuestion}
          onCancel={props.onClickModalCancel}
        >
          내용:
          <input
            type="textarea"
            onChange={props.onChangeEditComment}
            maxLength={100}
            defaultValue={props.defaultValue}
          />
        </Modal>
      )}
    </div>
  );
}
