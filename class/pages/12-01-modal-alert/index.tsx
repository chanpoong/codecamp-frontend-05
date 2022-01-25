import {Modal} from 'antd'

export default function ModalAlertPage(){

    const onClickSuccessButton=()=> {
        Modal.success({content: '게시물 등록에 성공했습니다'})
    }
    const onClickFailButton=()=> {
        Modal.error({content: '비밀번호를 확인해주세요'})
    }
    return(
        <>
            <button onClick={onClickSuccessButton}>알림창 나타내기(성공했을 때의 메세지)</button>
            <button onClick={onClickFailButton}>알림창 나타내기(실패했을 때의 메세지)</button>
        </>
    )
}