import {Myinput, MyButton} from './BoardWrite.styles'


export default function BoardWriteUI(props){

    return(
        <>
            작성자: <Myinput type='text' onChange={props.ddd}/> <br />
            제목: <Myinput type='text' onChange={props.eee} /> <br />
            내용: <Myinput type='text' onChange={props.fff} /> <br />
            <MyButton onClick={props.ccc} ggg={props.isActive}>Graphql-API 요청하기</MyButton>
            <div>{props.bbb}</div>
        </>
    )
}