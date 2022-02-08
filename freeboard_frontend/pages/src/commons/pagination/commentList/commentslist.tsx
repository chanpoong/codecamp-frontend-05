import * as JH from "../../../../src/components/commons/comments/boardCommentList/boardCommentList.styles";
import { getMyDate } from "../../libraries/utils";
import { Modal } from "antd";
import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const CommentsListWrapper = styled.div`
  width: 100%;
  background-color: white;
`;

export default function CommentListPage(props) {
  const [isEdit, setIsEdit] = useState(false);
  const onToggleModalUpdate = (event) => {
    setIsEdit(true);
    props.setCommentId(event?.target.id);
    props.setIsUpdateModalVisible((prev) => !prev);
  };
  return (
    <>
      <CommentsListWrapper>
        <>
          <JH.CommentHeader>
            <JH.ShowComment__header>
              <JH.ShowComment__headerIcon>icon</JH.ShowComment__headerIcon>
              <JH.ShowComment__headerWriter>
                {props.el.writer}
              </JH.ShowComment__headerWriter>

              <Rate allowHalf value={props.el.rating} disabled={true} />
            </JH.ShowComment__header>

            <JH.ShowComment__Button>
              <BsPencil
                id={props.el._id}
                className="UpdateIcon"
                size="20"
                type="button"
                cursor="pointer"
                onClick={onToggleModalUpdate}
              ></BsPencil>
              {props.isUpdateModalVisible && (
                <Modal
                  title={"수정"}
                  visible={props.isUpdateModalVisible}
                  onOk={props.updateHandleOk}
                  onCancel={props.updateCommentModalCancel}
                >
                  댓글을 수정하시겠습니까? <br /> 비밀번호: &nbsp;
                  <input type="password" onChange={props.passwordForUpdate} />
                  &nbsp;&nbsp;
                  <Rate onChange={props.onChangeCommentRating} allowHalf />
                  <br />
                  내용:
                  <input
                    type="textarea"
                    onChange={props.onChangeCommentContents}
                    maxLength={100}
                  />
                </Modal>
              )}
              <MdDeleteOutline
                id={props.el._id}
                className="DeleteIcon"
                size="25"
                type="button"
                cursor="pointer"
                onClick={props.onToggleModal}
              ></MdDeleteOutline>
              <Modal
                title={"삭제"}
                visible={props.isDeleteModalVisible}
                onOk={props.handleOk}
                onCancel={props.deleteCommentModalCancel}
              >
                댓글을 삭제하시겠습니까? <br /> 비밀번호: &nbsp;
                <input type="password" onChange={props.passwordForDelete} />
              </Modal>
            </JH.ShowComment__Button>
          </JH.CommentHeader>

          <JH.CommentBody>
            <JH.CommentContent>{props.el.contents}</JH.CommentContent>
            <JH.CommentCreatedAt>
              {getMyDate(props.el.createdAt)}
            </JH.CommentCreatedAt>
          </JH.CommentBody>
        </>
      </CommentsListWrapper>
    </>
  );
}
