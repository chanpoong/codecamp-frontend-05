import { common } from "@material-ui/core/colors"
import axios from "axios"



export default function CallbackPromiseAsyncAwaitPage(){

    const onClickCallback=()=>{
        
        const result1= new XMLHttpRequest()
        result1.open("get", "http://numbersapi.com/random?min=1&max=200")
        result1.send()
        result1.addEventListener('load', (res: any)=>{
          const num=res.target.response.split(' ')[0]

          const bbb=new XMLHttpRequest()
          bbb.open('get',`http://koreanjson.com/posts/${num}`)
          bbb.send()
          bbb.addEventListener('load', (res:any)=>{
              const userId=JSON.parse(res.target.response).UserId

              const ccc=new XMLHttpRequest()
                ccc.open('get',`http://koreanjson.com/posts?userId=${userId}`)
                ccc.send()
                ccc.addEventListener('load', (res:any)=>{
                    console.log('최종')
                    console.log(JSON.parse(res.target.response))
                })
          })
        })
    }

    const onClickPromise=()=>{
        axios.get("http://numbersapi.com/random?min=1&max=200").then((res)=>{
            const num=res.data.split(' ')[0]
            return axios.get(`http://koreanjson.com/posts/${num}`)
            
        }).then((res)=>{
            const userId=res.data.UserId
            return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
        }).then((res)=>{
            console.log(res)
        })
    }

    const onClickAsyncAwait= async()=>{
        const res1=await axios.get("http://numbersapi.com/random?min=1&max=200")
        const num=res1.data.split(' ')[0]
        const res2=axios.get(`http://koreanjson.com/posts/${num}`)
        const userId=(await res2).data.UserId
        const res3=axios.get(`http://koreanjson.com/posts?userId=${userId}`)
        console.log(res3)
    }

    return (
        <div>
            <button onClick={onClickCallback}>callback</button>
            <button onClick={onClickPromise}>promise</button>
            <button onClick={onClickAsyncAwait}>async-await</button>
        </div>
    )
}