// rest-API 요청을 위한 axios import
import axios from 'axios'
import { useState } from 'react'



export default function RestGet(){

    const [aaa, setAaa] = useState('')
    // 비동기식
    // function zzz(){
    //     const result= axios.get('https://koreanjson.com/posts/1')
    //     console.log(result)
    // }
    
    //동기식

    //화살표함수로 설정할 떄는 소괄호 앞에 async 사용
    const zzz = async() => {
        const result= await axios.get('https://koreanjson.com/posts/1')
        console.log(result.data.title)
        setAaa(result.data.title)
    }

    // async function zzz(){
    //     const result= await axios.get('https://koreanjson.com/posts/1')
    //     console.log(result.data.title)
    //     setAaa(result.data.title)
    // }



    return(
        <div>
            <button onClick={zzz}>Rest-API 요청하기</button>
            <div>{aaa}</div>
        </div>
    )
}