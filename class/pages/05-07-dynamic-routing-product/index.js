// rest-API 요청을 위한 axios import
import { useMutation, gql } from '@apollo/client'

import { useState } from 'react'
import {useRouter} from 'next/router'


const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String , $createProductInput: CreateProductInput! ){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`








export default function GraphqlMutationProduct(){
    const router =useRouter()
    const [productSeller, setProductSeller] = useState('')
    const [productName, setProductName] = useState('')
    const [productDetail, setProductDetail] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productID, setProductID] = useState('')
    
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async() => {     
        try{
            const result = await createProduct({
                variables: { 
                    seller: productSeller, _id: productID,
                    createProductInput:{
                        
                        name: productName,
                        detail: productDetail,
                        price: Number(productPrice)
                    }
                }
            })
            console.log(result.data.createProduct._id)    
            router.push(`/05-08-dynamic-routed-product/${result.data.createProduct._id} `)
    
        }   
        
        
        catch(error){
            console.log(error.message)
        }
        // finally{ //성공했든 실패했든 무조건 실행하는 파트
        //     alert('123')
        // }
    } 
    

    const onChangeSeller = (event) => {
        setProductSeller(event.target.value)
    }
    const onChangeProductName = (event) => {
        setProductName(event.target.value)
    }
    const onChangeProductDetail = (event) => {
        setProductDetail(event.target.value)
    }
    const onChangeProductPrice = (event) => {
        setProductPrice(event.target.value)
    }
    const onChangeProductID = (event) => {
        setProductID(event.target.value)
    }


    return(
        <div>
            판매자: <input type='text' onChange={onChangeSeller}/> <br />
            상품명: <input type='text' onChange={onChangeProductName} /> <br />
            상품내용: <input type='text' onChange={onChangeProductDetail} /> <br />
            상품가격: <input type='text' onChange={onChangeProductPrice} /> <br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
            
        </div>
    )
}