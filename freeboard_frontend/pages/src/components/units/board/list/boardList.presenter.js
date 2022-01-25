import * as JH from '../list/boardList.styles'

export default function ContentsBoardUI(props){


    return(
        <JH.Wrapper>
            <JH.WrapperHeader>
                <JH.HeaderTitle>자유게시판</JH.HeaderTitle>
                <JH.HeaderSearch>
                    <JH.SearchBar placeholder='Search' />
                    <JH.SearchBtn />
                </JH.HeaderSearch>
            </JH.WrapperHeader>
            <JH.WrapperBody>
                 
            {props.data?.fetchBoards?.map((el, index)=>(
                <JH.ContentsLine>
                    <span>{<input type='checkbox'/>} </span>                
                    <JH.ContentsLineWriter>작성자: {el.writer}</JH.ContentsLineWriter>
                    <JH.ContentsLineTitle id={el._id} onClick={props.onClickToBoard}>제목: {el.title}</JH.ContentsLineTitle>
                    <JH.ContentsLineLike>좋아요: {el.likeCount}</JH.ContentsLineLike>
                    <JH.ContentsLineTime>작성일: {el.createdAt}</JH.ContentsLineTime>
                   
                </JH.ContentsLine>
                
            ))}
            
            </JH.WrapperBody>
            <JH.WrapperFooter>                
                <JH.ContentsBtnLine>
                    <JH.MakeContentsBtn onClick={props.onClickCreateBoard}>게시글 작성</JH.MakeContentsBtn>
                </JH.ContentsBtnLine>
                <JH.ContentsPagesLine>
                    <JH.ContentsPages>123</JH.ContentsPages>
                </JH.ContentsPagesLine>
            </JH.WrapperFooter>
        </JH.Wrapper>
    )
}