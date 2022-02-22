
// setInterval(()=>{
//   document.getElementById
// },1000)



export default function TaskQueuePage() {

  const onClickTimer=()=>{
    console.log('go')
    setTimeout(()=>{
      console.log('1sec')
    },1000)
    let sum=0
    for(let i=0; i<=9999999; i+=1) sum=sum+1
    console.log('end')
  }

  return(
    <div>
      <button onClick={onClickTimer}> go </button>
    </div>
  )
} 