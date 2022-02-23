import { useQuery } from "@apollo/client";
import { DateToString } from "../../../../../commons/libraries/utils";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./productCommentAnswer.queries";

export default function ProductCommentAnswerPage(props) {
  const { data, refetch } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.id, page: 1 },
  });

  return (
    <div>
      <div>
        <input type="text" />
        <button> 등록 </button>
      </div>
      {data?.fetchUseditemQuestionAnswers?.map((el, index) => (
        <div key={props.id}>
          <div>{el.user.name}</div>
          <div>{el.contents}</div>
          <div>{DateToString(el.createdAt)}</div>
        </div>
      ))}
    </div>
  );
}
