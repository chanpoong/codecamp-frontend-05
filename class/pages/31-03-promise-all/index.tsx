
export default function PromiseAllPage(){
    const onClickPromise= async()=>{
        console.time("start promise ")
        const result= await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('goran')
            }, 5000)
        })
        console.log(result)

        const result2= await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('b')
            }, 2000)
        })
        console.log(result2)

        const result3= await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('c')
            }, 2000)
        })
        console.log(result3)

        console.timeEnd("start promise ")
    }
    const onClickPromiseAll=async ()=>{
        // 하나씩 개별적으로 입력하는 방법
        // console.time('start PromiseAll')
        // const results= await Promise.all([
        //      new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve('goran')
        //         }, 5000)
        //     }),
            
    
        //      new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve('b')
        //         }, 2000)
        //     }),
            
    
        //      new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //             resolve('c')
        //         }, 6000)
        //     }),
            
        // ])
        // console.log(results)
        // console.timeEnd('start PromiseAll')

        // map을 사용해서 간소화하기
        console.time('start PromiseAll')
        const classmates=['goran', 'b', 'c']
        // Promise.race 로 설정하면 먼저 끝난 작업에 대한 결과부터 받아옴
        const results= await Promise.all(
            classmates.map(
                (el)=>
                new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve(el)
                    }, 3000)
                }),
            )           
        )
        console.log(results)
        console.timeEnd('start PromiseAll')
    }
    return(
        <div>
            <button onClick={onClickPromise}>start</button>
            <button onClick={onClickPromiseAll}>start PromiseAll</button>
        </div>
    )
}