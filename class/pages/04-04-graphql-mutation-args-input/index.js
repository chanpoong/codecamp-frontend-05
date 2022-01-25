// rest-API 요청을 위한 axios import
import { useMutation, gql } from '@apollo/client'

import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation crateBoard(
        $writer:String
        $title:String
        $contents:String
    ){
        createBoard(
            writer: $writer,
            title: $title,
            contents: $contents
        ){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationArgsInput(){
    const [myWriter, setMyWriter] = useState('')
    const [myContents, setMyContents] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [aaa, setAaa] = useState('')
    const [qqq] = useMutation(CREATE_BOARD)

    const zzz = async() => {
        // const result= await axios.get('https://koreanjson.com/posts/1')
        const result= await qqq({
            variables: { writer: myWriter, title:myTitle, contents: myContents }
        })
        // console.log(result.data.CREATE_BOARD.message)
        setAaa(result.data.createBoard.message)

        // console.log(result.data.title)
        // setAaa(result.data.title)
    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
    }
    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
    }
    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
    }


    return(
        <div>
            작성자: <input type='text' onChange={onChangeMyWriter}/> <br />
            제목: <input type='text' onChange={onChangeMyTitle} /> <br />
            내용: <input type='text' onChange={onChangeMyContents} /> <br />
            <button onClick={zzz}>Graphql-API 요청하기</button>
            <div>{aaa}</div>
        </div>
    )
}