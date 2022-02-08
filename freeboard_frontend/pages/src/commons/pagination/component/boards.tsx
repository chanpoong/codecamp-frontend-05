import * as JH from "../../../components/units/board/list/boardList.styles";
import { getMyDate } from "../../libraries/utils";

export default function Boards(props) {
  return (
    <JH.Boards__Wrapper>
      {props.data?.fetchBoards?.map((el, index) => (
        <JH.ContentsLine key={index}>
          <JH.ContentsLineNo>{`${index + 1}`} </JH.ContentsLineNo>
          <JH.ContentsLineWriter>{el.writer}</JH.ContentsLineWriter>
          <JH.ContentsLineTitle id={el._id} onClick={props.onClickToBoard}>
            {el.title}
          </JH.ContentsLineTitle>
          <JH.ContentsLineLike>{el.likeCount}</JH.ContentsLineLike>
          <JH.ContentsLineTime>{getMyDate(el.createdAt)}</JH.ContentsLineTime>
        </JH.ContentsLine>
      ))}
    </JH.Boards__Wrapper>
  );
}
