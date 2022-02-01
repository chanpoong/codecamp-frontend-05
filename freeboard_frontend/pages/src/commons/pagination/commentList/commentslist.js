import * as JH from "../../../../src/components/commons/comments/boardCommentList/boardCommentList.styles";
import { getMyDate } from "../../libraries/utils";
import { Modal } from "antd";
import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { Rate } from "antd";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

const CommentsListWrapper = styled.div`
  width: 100%;
  /* height: 350px; */

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  background-color: silver;
`;

const CommentScroller = styled(InfiniteScroll)`
  /* width: 1200px; */
  width: 100%;
  padding: 15px;

  overflow: auto;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

export default function CommentListPage(props) {
  const onLoadMore = () => {
    if (!props?.data) return; // 불러올 데이터가 없으면 실행하지 않게

    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoardComments?.length / 10) + 1,
      },
      // Math.ceil(data.fetchBoards.length / 10)가 현재 페이지를 나타냄
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        } // 더 불러올 데이터가 없으면 이전 데이터만 보여주기
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        }; // 이전 글, 다음글 합쳐서 리턴
      },
    });
  };
  return (
    <CommentsListWrapper>
      <CommentScroller
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true || false}
        useWindow={false}
        // loader={!props.data ? <h4>Loading...</h4> : ""}
      >
        {/* <JH.FooterShowComment> */}
        {props.data?.fetchBoardComments?.map((el, index) => (
          <JH.FooterShowComment key={el._id}>
            <JH.CommentHeader>
              <JH.ShowComment__header>
                <JH.ShowComment__headerIcon>icon</JH.ShowComment__headerIcon>
                <JH.ShowComment__headerWriter>
                  {el.writer}
                </JH.ShowComment__headerWriter>
                {/* <JH.ShowComment__headerRating>{el.rating}</JH.ShowComment__headerRating> */}
                <Rate allowHalf value={el.rating} disabled="true" />
              </JH.ShowComment__header>

              <JH.ShowComment__Button>
                <BsPencil
                  className="UpdateIcon"
                  size="20"
                  type="button"
                  cursor="pointer"
                ></BsPencil>
                <MdDeleteOutline
                  id={el._id}
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
              <JH.CommentContent>{el.contents}</JH.CommentContent>
              <JH.CommentCreatedAt>
                {getMyDate(el.createdAt)}
              </JH.CommentCreatedAt>
            </JH.CommentBody>
          </JH.FooterShowComment>
        ))}
        {/* </JH.FooterShowComment> */}
      </CommentScroller>
    </CommentsListWrapper>
  );
}
