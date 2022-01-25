//state
import {useState} from 'react'


export default function StateHello(){

    const[qqq, setQqq] = useState('안녕하세요')

    function zzz(){
        setQqq('반갑습니다')
    }

    return(
        <div> 
            {/* 중괄호 안에 있는건 변수 또는 함수 */}
            <div>{qqq}</div>
            <button onClick={zzz} >click</button>
        </div>
    )
}