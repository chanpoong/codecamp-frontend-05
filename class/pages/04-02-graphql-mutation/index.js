// rest-API 요청을 위한 axios import
import { useMutation, gql } from '@apollo/client'
import axios from 'axios'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "철수", title:"제목입니다~", contents: "내용이에요~~"){
            _id
            number
            message
        }
    }
`


export default function GraphqlMutation(){

    const [aaa, setAaa] = useState('')
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async () => {
        // const result= await axios.get('https://koreanjson.com/posts/1')
        const result= await qqq()
        // console.log(result.data.CREATE_BOARD.message)
        setAaa(result.data.createBoard.message)

        // console.log(result.data.title)
        // setAaa(result.data.title)
    }

  


    return(
        <div>
            <button onClick={zzz}>Graphql-API 요청하기</button>
            <div>{aaa}</div>
        </div>
    )
}