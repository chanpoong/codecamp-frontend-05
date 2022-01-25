import {useRouter} from 'next/router' //router 기능 사용을 위한 import
//정적페이지 이동

export default function StaticRoutingPage() {
    const router=useRouter() // 선언한 router는 라우터 객체
    const onClickMove =()=>{
        router.push('/05-02-static-routed')
    }
    

    return(
        <button onClick={onClickMove}>페이지 이동하기</button>
    )
}