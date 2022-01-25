
import {Myinput, MyButton} from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'




export default function BoardWriteUI(props:IBoardWriteUIProps){

    return(
        <>
            <h1>{props.isEdit ? "수정하기" : "등록하기"}</h1>
            작성자: <Myinput type='text' onChange={props.ddd} defaultValue={props.isEdit ? props.data?.fetchBoard.writer :''}
            /> <br />
            제목: <Myinput type='text' onChange={props.eee}  defaultValue={props.isEdit ? props.data?.fetchBoard.title :''}
            /> <br />
            내용: <Myinput type='text' onChange={props.fff} defaultValue={props.isEdit ? props.data?.fetchBoard.contents :''}
            /> <br />
            <MyButton
                onClick={props.isEdit ? props.xxx :props.ccc} ggg={props.isActive}
                >
                {props.isEdit ? "수정하기" : "등록하기"}
            </MyButton>
            <div>{props.bbb}</div>
            {/* MyButton의 onClick파트는 isEdit가 true= xxx 실행, false =ccc 실행 */}

            {/* {props.isEdit ? (
                <MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</MyButton>
            ) : (
                <MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</MyButton>
            )} */}
        </>
    )
}