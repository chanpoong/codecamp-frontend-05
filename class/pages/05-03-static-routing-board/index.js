//정적페이지 이동
import {useRouter} from 'next/router' //router 기능 사용을 위한 import


export default function StaticRoutingPage() {
    const router=useRouter() // 선언한 router는 라우터 객체
    const onClickMove1 =()=>{
        router.push('/05-04-static-routed-board/1')
    }
    const onClickMove2 =()=>{
        router.push('/05-04-static-routed-board/2')
    }
    const onClickMove3 =()=>{
        router.push('/05-04-static-routed-board/3')
    }

    return(
        <>
             {/* <button onClick={onClickMove}>페이지 이동하기</button> */}
            
            <button onClick={onClickMove1}>1번 게시글로 이동</button>
            <button onClick={onClickMove2}>2번 게시글로 이동</button>
            <button onClick={onClickMove3}>3번 게시글로 이동</button>
            
        </>
    )
}