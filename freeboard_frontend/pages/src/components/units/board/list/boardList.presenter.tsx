import * as JH from "./boardList.styles";

import Boards from "../../../../commons/pagination/component/boards";
import Pagination from "../../../../commons/pagination/component/pagination";

export default function ContentsBoardUI(props) {
  return (
    <JH.Wrapper>
      <JH.WrapperHeader>
        <JH.HeaderTitle>자유게시판</JH.HeaderTitle>
        <JH.HeaderSearch>
          <JH.SearchBar placeholder="Search" onChange={props.onChangeSearch} />
          <JH.SearchBtn />
        </JH.HeaderSearch>
      </JH.WrapperHeader>
      <JH.WrapperBody>
        <JH.ContentsLine>
          <JH.ContentsLineNo>No.</JH.ContentsLineNo>
          <JH.ContentsLineWriter>작성자</JH.ContentsLineWriter>
          <JH.ContentsLineTitle>제목</JH.ContentsLineTitle>
          <JH.ContentsLineLike>추천수</JH.ContentsLineLike>
          <JH.ContentsLineTime>작성일</JH.ContentsLineTime>
        </JH.ContentsLine>
        <Boards
          data={props.data}
          onClickToBoard={props.onClickToBoard}
          keyword={props.keyword}
        />
      </JH.WrapperBody>
      <JH.WrapperFooter>
        <JH.ContentsBtnLine>
          <JH.MakeContentsBtn onClick={props.onClickCreateBoard}>
            게시글 작성
          </JH.MakeContentsBtn>
        </JH.ContentsBtnLine>
        <JH.ContentsPagesLine>
          <JH.ContentsPages>
            <Pagination
              data={props.data}
              refetch={props.refetch}
              keyword={props.keyword}
              lastPage={props.lastPage}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
            />
          </JH.ContentsPages>
        </JH.ContentsPagesLine>
      </JH.WrapperFooter>
    </JH.Wrapper>
  );
}
