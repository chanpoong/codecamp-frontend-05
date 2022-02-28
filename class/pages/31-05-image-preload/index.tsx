import { useEffect, useRef, useState } from "react"

export default function ImagePreloadPage() {
    const [loaded, setLoaded]=useState(false)
    const [imgTag,setImgTag]=useState<HTMLImageElement>()
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const img = new Image() //이미지 태그 생성
        img.src=
        'https://bnetcmsus-a.akamaihd.net/cms/blog_header/ki/KI5Z7EH68HEA1589910860503.jpg' //이미지 주소
        img.onload=()=>{
            setImgTag(img)
        }
    },[])

    const onClickImagePreLoad =()=>{
        if(imgTag)
        divRef.current?.appendChild(imgTag)  
    }

    const onClickImageLoad=()=>{
        setLoaded(true)
    }


    return(
        <div>
            ================================================ 프리로드
            <div ref={divRef}></div>
            <button onClick={onClickImagePreLoad}>이미지 프리로드</button>
            ================================================ 일반 로드
            {loaded && <img src='https://bnetcmsus-a.akamaihd.net/cms/blog_header/ki/KI5Z7EH68HEA1589910860503.jpg' />}
            <button onClick={onClickImageLoad}>이미지 일반 로드</button>
        </div>
    )
}