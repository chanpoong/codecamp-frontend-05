import {MyTitle, MyEmail} from '../../styles/emotion'


export default function Emotionpage(){
    return(
        <div>
            <MyTitle>로그인</MyTitle>
            
            <h1>아이디</h1>
            <input type='text'/>
            

            <h2>비밀번호</h2>
            <input type='text'/>
            
        </div>
    )
}