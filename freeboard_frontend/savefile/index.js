import {useRouter} from 'next/router'
import {useMutation,useQuery,gql} from '@apollo/client'
import {Wrapper,
    //WrapperHeader part
    WrapperHeader,WrapperHeader__Top,WrapperHeader__pannel,WrapperHeader__bottom,
    Top__LogoImg, Top_Button,LoginBtn,SignupBtn,
    //WrapperBody part
    WrapperBody,WrapperBody__contents,WrapperBody__menu,ContentsHeader,ContentsBody,
    ContentsNum,ContentsTitle,ContentsWriter,ContentsText,ToListBtn,RewriteBtn,DeleteBtn,

    //WrapperFooter part
    WrapperFooter,WrapperFooter__Header,FooterMakeComment,FooterShowComment,MakeCommnetInfo
    ,MakecommentTxtBox,CommentWriter,CommentInput,CommentInput__,TypingCutline,SubmitCommentBtn
    } from '../../../styles/contentsDetail__emotion/emotion.js'



const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
    fetchBoard(boardId : $boardId) {
        _id
        writer
        title
        contents
        likeCount
        dislikeCount
        createdAt
      }
    }
`

const DELETE_BOARD=gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId : $boardId)
    }
`


export default function DynamicRoutedPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: String(router.query.aaa)
        }
    })
    const [deleteBoard] = useMutation(DELETE_BOARD)
    

    const onClickDelete= (event) =>{
        deleteBoard({
            variables: {
                boardId: String(router.query.aaa)
            },
            
        })
        alert('글을 삭제했습니다.')
        router.push(`/boards`)        
    }

    const onClickUpdateBoard=(event)=>{
        router.push(`/boards/${String(router.query.aaa)}/edit`)
    }

    

    return(
        <Wrapper>
            <WrapperHeader>
                <WrapperHeader__Top>
                    <Top__LogoImg>code.camp img</Top__LogoImg>
                    <Top_Button>
                        <LoginBtn>로그인</LoginBtn>
                        <SignupBtn>회원가입</SignupBtn>
                    </Top_Button>
                </WrapperHeader__Top>
                <WrapperHeader__pannel>pannelPart</WrapperHeader__pannel>
                <WrapperHeader__bottom>headerMenu</WrapperHeader__bottom>
            </WrapperHeader> 
            <WrapperBody>
                <WrapperBody__contents>
                    <ContentsHeader>
                        <ContentsNum >글번호: {data?.fetchBoard?._id}</ContentsNum> 
                        <ContentsTitle>제목: {data?.fetchBoard?.title}</ContentsTitle>
                        <ContentsWriter>작성자: {data?.fetchBoard?.writer}</ContentsWriter>
                    </ContentsHeader>
                    <ContentsBody>
                        <ContentsText>{data?.fetchBoard?.contents}</ContentsText>
                    </ContentsBody>
                </WrapperBody__contents>
                <WrapperBody__menu>
                    <ToListBtn>목록으로</ToListBtn>
                    <RewriteBtn onClick={onClickUpdateBoard}>수정하기</RewriteBtn>
                    <DeleteBtn  onClick={onClickDelete}>삭제하기</DeleteBtn>
                </WrapperBody__menu>
            </WrapperBody>
            
            <WrapperFooter>

                <WrapperFooter__Header>v 댓글</WrapperFooter__Header>
                
                <FooterMakeComment>
                    <MakeCommnetInfo>
                        <CommentWriter placeholder='작성자'/>
                        <CommentWriter placeholder='비밀번호'/>
                    </MakeCommnetInfo>
                    <MakecommentTxtBox>
                        <CommentInput placeholder='개인정보를 공유 및 요청하거나 등등 '>
                            
                        </CommentInput>
                        <CommentInput__>
                                <TypingCutline>0/100</TypingCutline>
                                <SubmitCommentBtn>등록하기</SubmitCommentBtn>
                            </CommentInput__>
                    </MakecommentTxtBox>
                </FooterMakeComment>

                <FooterShowComment></FooterShowComment>
            </WrapperFooter>

        </Wrapper>

    )
}