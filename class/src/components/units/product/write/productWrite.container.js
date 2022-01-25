
import { useMutation } from '@apollo/client'
import ProductWriteUI from './productWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './ProductWrite.queries'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function ProductWrite(props){
    const [isActive,setIsActive] = useState(false)
    const router = useRouter()

    const [myWriter, setMyWriter] = useState('')
    const [myContents, setMyContents] = useState('')
    const [myTitle, setMyTitle] = useState('')
    const [myNum, setMyNum] = useState('')
    const [myMessage, setMyMessage] = useState('')
    const [aaa, setAaa] = useState('')
    const [qqq] = useMutation(CREATE_BOARD)
    const [www] = useMutation(UPDATE_BOARD)
    const [createProduct]=useMutation(CREATE_PRODUCT)
    const [updateProduct]=useMutation(UPDATE_PRODUCT)
    const [deleteProduct]=useMutation(DELETE_PRODUCT)

    //판매물품 생성 함수    
    const submitCreateProduct = async()=>{
        console.log('등록하기')
        await createProduct({
            variables: { _id:aaa , number:Number(myNum),message:myMessage}
        })
        
        router.push(`/08-quiz/${router.query.aaa}`)
    }
    //판매물품 수정 함수
    const submitUpdateProduct = async()=>{
        console.log('수정하기')
        await updateProduct({
            variables: { 
                _id:aaa,
                number:Number(myNum),
                message:myMessage
            }
        })
        console.log(props.data.updateProduct.aaa)
        router.push(`/08-quiz/${router.query.aaa}`)
    }
    //판매물품 삭제 함수
    const submitDeleteProduct = async()=>{
        await deleteProduct({
            variables: { boardId: String(router.query.myNum)}
        })
    }

    //게시물 작성함수
    const zzz = async() => {
        const result= await qqq({
            variables: { writer: myWriter, title:myTitle, contents: myContents }
        })
        
        console.log(result.data.createBoard)
        setAaa(result.data.createBoard.message)
        router.push(`/08-quiz/${result.data.createBoard.number}`)

        
    }
    //게시물 수정 함수
    const xxx = async() => {
        console.log('수정하기 클릭')
        const result= await www({
            variables: {number: Number(router.query.myNum) ,writer:myWriter, title:myTitle,contents:myContents}
        })
        console.log(result.data.updateBoard)
        router.push(`/08-quiz/${router.query.myNum}`)
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
        <ProductWriteUI 
            bbb={aaa}
            ccc={zzz}
            xxx={xxx}
            ddd={onChangeMyWriter}
            eee={onChangeMyTitle}
            fff={onChangeMyContents}
            isActive={isActive}
            isEdit={props.isEdit}
            submitCreateProduct={submitCreateProduct}
            submitUpdateProduct={submitUpdateProduct}
            submitDeleteProduct={submitDeleteProduct}
            
            
        />
    )
}