
// setInterval(()=>{
//   document.getElementById
// },1000)



export default function TaskQueuePage() {

  const onClickTimer=()=>{
    console.log('go')

    //비동기 작업 (매크로큐에서 동작)
    setTimeout(()=>{
      console.log('setTimeout, MacroQueue, Run after 0sec')
    },0);

    new Promise((resolve)=>{
      resolve('Promise')
    }).then((res)=>{
      console.log('promise, MicroQueue, Run after 0sec --1')
    })

    setInterval(()=>{
      console.log('setInterval, MacroQueue, Run every 0sec')
    },0);

    let sum=0
    for(let i=0; i<=9999999; i+=1) sum=sum+1

    new Promise((resolve)=>{
      resolve('Promise')
    }).then((res)=>{
      console.log('promise, MicroQueue, Run after 0sec -- 2')
    })

    console.log('end')
  }

  return(
    <div>
      <button onClick={onClickTimer}> go </button>
    </div>
  )
} 