import styled from '@emotion/styled'



export const WrapperFooter=styled.div`
    width: 100%;

    padding-top: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

`

export const WrapperFooter__Header=styled.div`
    width: 100%;
`

export const FooterMakeComment=styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const MakeCommentInfo=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const CommentWriter=styled.input`
    width: 200px;
    height: 30px;
    margin-right: 10px;
    margin-bottom: 15px;
`
export const MakeCommentTxtBox=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border: solid 1px grey;
`
export const CommentInput=styled.textarea`
    width: 100%;
    height: 130px;
    border:none;
    margin-bottom: 15px;

    font-size: 1rem;

`
export const CommentInput__=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -5px;

    border: none;
`
export const TypingCutLine=styled.span`
    width: 100%;
    height: 35px;

    margin-top: -5px ;
    border-top: 1px solid grey;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: grey;
    
    padding-left: 5px ;
`
export const SubmitCommentBtn=styled.button`
    width: 80px;
    height: 30px;
    background-color: black;
    border-radius: 8px;
    color: white;


    border-top: 1px solid grey;
`
export const FooterShowComment=styled.div`
    width: 1200px;
    height: 100%;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: 40px;
    border-bottom: 1px grey solid;
`
export const CommentHeader=styled.div`
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ShowComment__header=styled.div`
    width: 1200px ;

    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const ShowComment__headerIcon=styled.div`
    width: 50px;
    display: flex;
`
export const ShowComment__headerWriter=styled.div`
    width: 150px;
    display: flex;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: black;
`
export const ShowComment__headerRating=styled.div`
    width: 50px;
    display: flex;
`
export const ShowComment__Button=styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    
`
export const CommentBody=styled.div`
    width: 1200px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding-bottom: 10px;
    border-bottom: 1px solid grey;
`
export const CommentContent=styled.div`
    width: 1200px;
    height: 100px;

    padding-top: 10px;
`
export const CommentCreatedAt=styled.div`
    width: 200px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`