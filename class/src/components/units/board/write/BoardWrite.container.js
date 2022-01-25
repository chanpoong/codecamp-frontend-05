
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.persenter'
import { CREATE_BOARD } from './BoardWrite.queries'
import { useState } from 'react'



export default function BoardWrite(){
    const [isActive,setIsActive] = useState(false)

    const [myWriter, setMyWriter] = useState('')
    const [myContents, setMyContents] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [aaa, setAaa] = useState('')
    const [qqq] = useMutation(CREATE_BOARD)

    

    const zzz = async() => {
        const result= await qqq({
            variables: { writer: myWriter, title:myTitle, contents: myContents }
        })
        
        console.log(result.data.createBoard)
        setAaa(result.data.createBoard.message)

        
    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
        if(myTitle && event.target.value && myContents){
            setIsActive(true)
        }else if(myTitle==='' || event.target.value==='' || myContents===''){
            setIsActive(false)

        }
    }
    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
        if(myTitle && myWriter && event.target.value){
            setIsActive(true)
        }else if(myTitle===''|| myWriter==='' || event.target.value===''){
            setIsActive(false)

        }
    }
    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
        if(event.target.value && myWriter && myContents){
            setIsActive(true)
        }else if(event.target.value==='' || myWriter==='' || myContents===''){
            setIsActive(false)

        }
    }

 

    return(
        <BoardWriteUI 
            bbb={aaa}
            ccc={zzz}
            ddd={onChangeMyWriter}
            eee={onChangeMyTitle}
            fff={onChangeMyContents}
            isActive={isActive}
            
        />
    )
}