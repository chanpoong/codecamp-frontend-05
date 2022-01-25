// rest-API 요청을 위한 axios import
import { useMutation, gql } from '@apollo/client'

import { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'


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

    const [aaa, setAaa] = useState<string>('')
    const [qqq] = useMutation<Pick<IMutation,"createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
    // <받는 데이터의 타입, 입력하는(variables)데이터의 타입>

    const zzz = async () => {
        // const result= await axios.get('https://koreanjson.com/posts/1')
        const result= await qqq()
        // console.log(result.data.CREATE_BOARD.message)
        result.data?.createBoard?.message
        setAaa(result.data?.createBoard?.message || '아무스트링')

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