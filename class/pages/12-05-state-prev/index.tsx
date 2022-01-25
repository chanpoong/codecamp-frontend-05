import { useState } from "react"

export default function StatePrevPage(){
    const [count, setCount]=useState(0);
    
    const onClickCountup = () =>{
        setCount(count+1)
        setCount((prev)=>(prev+1))
    }
    return(
        <>
            <div>현재 카운트: {count}</div>
            <button onClick={onClickCountup}>카운트 올리기</button>
            
        </>
    )
}