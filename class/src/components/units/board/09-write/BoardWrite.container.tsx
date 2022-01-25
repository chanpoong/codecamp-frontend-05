
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.persenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function BoardWrite(props){
    const [isActive,setIsActive] = useState(false)
    const router = useRouter()

    const [myWriter, setMyWriter] = useState('')
    const [myContents, setMyContents] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [aaa, setAaa] = useState('')
    const [qqq] = useMutation(CREATE_BOARD)
    const [www] = useMutation(UPDATE_BOARD)

    

    const zzz = async() => {
        const result= await qqq({
            variables: { writer: myWriter, title:myTitle, contents: myContents }
        })
        
        console.log(result.data.createBoard)
        setAaa(result.data.createBoard.message)
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }

    const xxx = async() => {
        console.log('수정하기 클릭')
        // interface IMyVariables {
        //     number:number
        //     writer?:string
        //     title?:string
        //     contents?:string
        // }

        const myVariables={
            number: Number(router.query.mynumber),

        }

        if(myWriter!=='') myVariables.writer=myWriter
        if(myTitle!=='') myVariables.title=myTitle
        if(myContents!=='') myVariables.contents=myContents
        
        const result= await www({
            variables: myVariables
        })
        console.log(result.data.updateBoard)
        router.push(`/09-01-boards/${router.query.mynumber}`)
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
            xxx={xxx}
            ddd={onChangeMyWriter}
            eee={onChangeMyTitle}
            fff={onChangeMyContents}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            
        />
    )
}