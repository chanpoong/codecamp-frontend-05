//컴포넌트
export default function Example(props){

    return(

        <div>
            <h1>{props.aaa? "수정" : "등록"}페이지</h1>
            제목: <input type='text' /> <br />
            내용: <input type='text' /> <br />
            <button>{props.aaa? "수정" : "등록"}하기</button>
        </div>
    )
}