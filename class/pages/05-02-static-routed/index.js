import {useRouter} from 'next/router' 

export default function StaticRoutedPage() {
    const router=useRouter() // 선언한 router는 라우터 객체
    const onClickMove =()=>{
        router.push('/05-01-Static-routing')
    }
    


    return(
        <div>
            페이지 이동완료

            <button onClick={onClickMove}>돌아가기</button>
        </div>
    )
}