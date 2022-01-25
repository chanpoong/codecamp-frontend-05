//let count

export default function LetCount(){

    let count = 0

    function zzz(){
        count=count+1
        console.log('현재 카운트: '+count)
        // document.getElementById를 사용해 연결하지 않았기에 화면에 반영되지 않음
        
        
        document.getElementById('qqq').innerText=count
        //let에서는 13번 라인을 사용해야만 화면에 반영가능
    }

    return(
        <div>
            <div id='qqq'>{count}</div>
            <button onClick={zzz}>카운트 증가</button>

        </div>
    )

}