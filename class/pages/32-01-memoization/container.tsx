import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage(){
    console.log("Container Rendering")
    let countLet=0;
    const [countState, setCountState]=useState(0)
    
    const aaa = useMemo(()=> 
          Math.random()
    , [countState])
    

    const onClickLet=useCallback(()=>{
        countLet += 1
        console.log(countLet)
    }, [])

    
    const onClickState=useCallback(()=>{
        setCountState((prev)=> prev+1)
    }, [])

    //useMemo로 useCallback 구현해보기
    // const onClickState=useMemo(()=>{
    //    return ()=>{ setCountState((prev)=> prev+1) }
    // }, [])
    

    // const onClickState=()=>{
    //     setCountState((prev)=> prev+1)
    // }

    return(
        <div>
            <div>{aaa}</div>
            <div>-=-=-=-=-==-=-=-=-=-=-=-=--=-=-=-=--=</div>
            <h1>MemoizationContainerPage</h1>
            <div>count Let{countLet}</div>
            <button onClick={onClickLet}>increase countLet</button><br />

            <div>count State{countState}</div>
            <button onClick={onClickState}>increase countState</button>
            <MemoizationPresenterPage />
        </div>
        
    )
}