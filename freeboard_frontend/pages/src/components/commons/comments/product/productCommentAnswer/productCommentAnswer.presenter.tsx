import { DateToString } from "../../../../../commons/libraries/utils";

export default function ProductCommentAnswerPageUI(props) {
  return (
    <div>
      <div>
        <input type="text" onChange={props.onChangeContents} />
        <button onClick={props.createAnswer}> 등록 </button>
      </div>
      {props.data?.fetchUseditemQuestionAnswers?.map((el) => (
        <div key={props.id}>
          <div>{el.user.name}</div>
          {props.isEdit && props.commentId === el._id ? (
            <input
              defaultValue={el.contents}
              onChange={props.onChangeEditContents}
            />
          ) : (
            <div>{el.contents}</div>
          )}

          <div>{DateToString(el.createdAt)}</div>
          {props.isEdit && props.commentId === el._id ? (
            <button id={el._id} onClick={props.EditAnswer}>
              완료
            </button>
          ) : (
            <button id={el._id} onClick={props.onChangeToEdit}>
              수정
            </button>
          )}

          <button id={el._id} onClick={props.deleteAnswer}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}
