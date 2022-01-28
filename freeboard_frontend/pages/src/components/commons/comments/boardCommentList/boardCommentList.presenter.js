import * as JH from "./boardCommentList.styles";
import { Rate } from "antd";

import CommentListPage from "../../../../commons/pagination/commentList/commentslist";

export default function BoardCommentListPageUI(props) {
  return (
    <>
      <JH.WrapperFooter>
        <JH.FooterMakeComment>
          <JH.WrapperFooter__Header>v 댓글</JH.WrapperFooter__Header>
          <JH.MakeCommentInfo>
            <JH.CommentWriter
              onChange={props.onChangeCommentWriter}
              placeholder="작성자"
            />
            <JH.CommentWriter
              type="password"
              onChange={props.onChangeCommentPassword}
              placeholder="비밀번호"
            />
            <Rate
              onChange={props.onChangeCommentRating}
              allowHalf
              defaultValue={1}
              maxLength={5}
            />
          </JH.MakeCommentInfo>
          <JH.MakeCommentTxtBox>
            <JH.CommentInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={props.onChangeCommentContents}
              maxLength={100}
            ></JH.CommentInput>
            <JH.CommentInput__>
              <JH.TypingCutLine>
                {props.commentContents.length}/100
              </JH.TypingCutLine>
              <JH.SubmitCommentBtn onClick={props.submitComment}>
                등록하기
              </JH.SubmitCommentBtn>
            </JH.CommentInput__>
          </JH.MakeCommentTxtBox>
        </JH.FooterMakeComment>

        <JH.CommentCutLine>
          <CommentListPage
            data={props.data}
            fetchMore={props.fetchMore}
            passwordForDelete={props.passwordForDelete}
            onToggleModal={props.onToggleModal}
            isDeleteModalVisible={props.isDeleteModalVisible}
            handleOk={props.handleOk}
            deleteCommentModalCancel={props.deleteCommentModalCancel}
          />
        </JH.CommentCutLine>
      </JH.WrapperFooter>
    </>
  );
}
