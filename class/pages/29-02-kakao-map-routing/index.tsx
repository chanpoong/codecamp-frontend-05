// Kakao Map appKey: b01d65e21d48e9aeaf9d190e4949e5e0

import { useRouter } from "next/router"


export default function KakaoMapRoutingPage() {
    const router=useRouter()

    const onClickMoveToMap=()=>{
        router.push('/29-03-kakao-map-routed')
    }
    
    return (
        <div>
            <button onClick={onClickMoveToMap}>맵으로 이동하기</button>
            {/* <a href="/29-03-kakao-map-routed">go map</a> */}
        </div>
    )
}