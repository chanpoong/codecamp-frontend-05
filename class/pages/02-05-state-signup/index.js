import {useState} from 'react'

export default function StateSignup(){
    // 이메일 비밀번호 등 입력정보를 state에 저장해 백엔드로 전송

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [emailError, setEmailError]= useState('')
    const [passwordError, setPasswordError]= useState('')
    

    function aaa(event){
        // event.target=> <input type='text' />태그 전체를 가져옴
        // event.target.value -> 해당 태그의 값을 가져옴
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    function bbb(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    // function ccc(event){
    //     console.log('email:'+ email)
    //     console.log('password:'+ password)

    //     if(email.includes('@') === false){
    //         alert('잘못된 이메일 주소입니다.')
    //     }else{
    //         alert('회원가입을 축하합니다!')
    //     }

    // }
    function fff(){
        if(email.includes('@') === false){
            setEmailError('잘못된 이메일 주소입니다.')
        }if(password.length <8){
            setPasswordError('비밀번호는 8자리 이상이어야 합니다.')
        }else{
            alert('회원가입을 축하합니다.')
        }
    }


    return(
        <div>
            이메일: <input type='text' onChange={aaa}/> <br/>
            <span>{emailError}</span> <br/><br/>
            비밀번호: <input type='password' onChange={bbb}/> <br/>
            <span>{passwordError}</span><br/><br/>
            <button onClick={fff}>회원가입</button>
        </div>
    )

}