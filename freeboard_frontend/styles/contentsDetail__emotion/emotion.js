import styled from '@emotion/styled'

export const Wrapper=styled.div`
    width: 1920px;  
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 3805px; */
    
`

// WrapperHeader part
export const WrapperHeader=styled.div`
    width: 1920px;    
    display:flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
` 
export const WrapperHeader__Top=styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    
    padding-left: 200px;

    margin-top: 50px;
    background-color: red;
    
`
export const Top__LogoImg=styled.div`
    width: 300px;
    height: 70px;

    font-size: 20px;
    font-weight: bold;

    background-color: white;
`
export const Top_Button=styled.div`
    width: 400px;
`
export const LoginBtn=styled.button`
    width: 92px;
    height: 44px;
    border:none;
    cursor: pointer;
    background-color: white;
`
export const SignupBtn=styled.button`
    width: 92px;
    height: 44px;
    background-color: #FFD600;
    border:none;
    cursor: pointer;
`


export const WrapperHeader__pannel=styled.div`
    width: 100%;
    height: 400px;
    background-color: skyblue;

    font-weight: bold;
    font-size: 50px;
    color: black;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const WrapperHeader__bottom=styled.div`
    width: 100%;
    height: 64px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 15px;
    font-weight: bold;
    color: black;

    
    margin-bottom: 20px;

    background-color: yellow;

`



// WrapperBody part
export const WrapperBody=styled.div`
    width: 1200px;
 


`

export const WrapperBody__contents=styled.div`
    width: 100%;

    display: flex;         
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContentsHeader=styled.div`
    width: 100%;

    display: flex;         
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px grey solid;

    padding: 30px 50px 30px 50px;

`

export const ContentsNum=styled.div`
    width: 200px;
    height: 70px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`
export const ContentsTitle=styled.div`
    width: 200px;
    height: 70px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`
export const ContentsWriter=styled.div`
    width: 200px;
    height: 70px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`
export const ContentsText=styled.div`
    width: 100%;
    height: 700px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding: 30px 50px 30px 50px;

    white-space: pre-line;
`

export const ContentsBody=styled.div`
    width: 100%;

    display: flex;         
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 30px;

`


export const WrapperBody__menu=styled.div`
    width: 100%;

    display: flex;         
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    

    text-align: center;
    
`
export const ToListBtn=styled.button`
    width: 150px;
    height: 40px;

    margin-right: 15px;
    background-color: white;
    cursor: pointer;
`
export const RewriteBtn=styled.button`
    width: 150px;
    height: 40px;

    margin-right: 15px;
    background-color: white;
    cursor: pointer;
`
export const DeleteBtn=styled.button`
    width: 150px;
    height: 40px;

    background-color: white;
    cursor: pointer;
`

// WrapperFooter part
export const WrapperFooter=styled.div`
    width: 100%;

    padding-top: 20px;
    margin-bottom: 20px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

`
export const WrapperFooter__Header=styled.div`
    width: 100%;
`
export const FooterMakeComment=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const MakeCommnetInfo=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const CommentWriter=styled.input`
    width: 100%;
`
export const MakecommentTxtBox=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border: solid 1px grey;
`
export const CommentInput=styled.textarea`
    width: 100%;
    border:none;
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

export const TypingCutline=styled.span`
    width: 100%;
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
    color: white;
`

export const FooterShowComment=styled.div`
    width: 100%;
`