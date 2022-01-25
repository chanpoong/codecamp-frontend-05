import BoardCommentsPage from '../../../commons/comments'
import * as JH from './boardDetail.styles'
import ReactPlayer from 'react-player' 

export default function BoardDetailUI(props){

    return(
        <JH.Wrapper>
            <JH.WrapperHeader>
                <JH.WrapperHeader__Top>
                    <JH.Top__LogoImg>code.camp img</JH.Top__LogoImg>
                    <JH.Top_Button>
                        <JH.LoginBtn>로그인</JH.LoginBtn>
                        <JH.SignupBtn>회원가입</JH.SignupBtn>
                    </JH.Top_Button>
                </JH.WrapperHeader__Top>
                <JH.WrapperHeader__pannel>pannelPart</JH.WrapperHeader__pannel>
                <JH.WrapperHeader__bottom>headerMenu</JH.WrapperHeader__bottom>
            </JH.WrapperHeader> 
            <JH.WrapperBody>
                <JH.WrapperBody__contents>
                    <JH.ContentsHeader>
                        <JH.ContentsNum >글번호: {props.data?.fetchBoard._id}</JH.ContentsNum> 
                        <JH.ContentsTitle>제목: {props.data?.fetchBoard.title}</JH.ContentsTitle>
                        <JH.ContentsWriter>작성자: {props.data?.fetchBoard.writer}</JH.ContentsWriter>
                    </JH.ContentsHeader>
                    <JH.ContentsBody>
                        <JH.ContentsText>{props.data?.fetchBoard.contents}</JH.ContentsText>
                        <JH.YoutubePlayer>
                            <ReactPlayer 
                                url={String(props.data?.fetchBoard.youtubeUrl)}
                            />
                        </JH.YoutubePlayer>
                    </JH.ContentsBody>
                </JH.WrapperBody__contents>
                
                
                <JH.WrapperBody__menu>
                    <JH.BoardLikeCountWrapper>
                        <JH.LikeBtnPart   onClick={props.onClickLikeBoard}>
                            <JH.LikeBtn ></JH.LikeBtn>
                            <JH.LikeCount>{props.data?.fetchBoard.likeCount}</JH.LikeCount>
                        </JH.LikeBtnPart>
                        <JH.DisLikeBtnPart onClick={props.onClickDisLikeBoard}>
                            <JH.DisLikeBtn></JH.DisLikeBtn>
                            <JH.DisLikeCount>{props.data?.fetchBoard.dislikeCount}</JH.DisLikeCount>
                        </JH.DisLikeBtnPart>
                    </JH.BoardLikeCountWrapper>
                    <div>
                        <JH.ToListBtn onClick={props.onClickToBoard}>목록으로</JH.ToListBtn>
                        <JH.RewriteBtn onClick={props.onClickUpdateBoard}>수정하기</JH.RewriteBtn>
                        <JH.DeleteBtn  onClick={props.onClickDelete}>삭제하기</JH.DeleteBtn>
                    </div>
                </JH.WrapperBody__menu>
            </JH.WrapperBody>
            
            <BoardCommentsPage
                
            />
            

        </JH.Wrapper>
    )
}