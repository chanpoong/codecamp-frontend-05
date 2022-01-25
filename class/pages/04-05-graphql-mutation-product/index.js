// rest-API 요청을 위한 axios import
import { useMutation, gql } from '@apollo/client'

import { useState } from 'react'


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

    const [productSeller, setProductSeller] = useState('')
    const [productName, setProductName] = useState('')
    const [productDetail, setProductDetail] = useState('')
    const [productPrice, setProductPrice] = useState('')
    
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async() => {        
        await createProduct({
            variables: { 
                seller: productSeller,
                createProductInput:{
                    name: productName,
                    detail: productDetail,
                    price: Number(productPrice)
                }
            }
        })
         
       
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