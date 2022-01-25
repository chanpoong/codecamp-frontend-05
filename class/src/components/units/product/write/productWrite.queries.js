import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
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

export const UPDATE_BOARD = gql`
    mutation updateBoard($number: Int, $writer: String,$title: String,$contents:String){
        updateBoard(number: $number, writer: $writer, title:$title,contents:$contents){
            number
            message
        }
    }
`

export const CREATE_PRODUCT =gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createBoard(seller:$seller, createProductInput:$createProductInput){
            name
            detail
            price
        }
    }
`

export const UPDATE_PRODUCT=gql`
    mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!){
        updateProduct(productId:$productId,updateProductInput:$updateProductInput ){
            name
            detail
            price
        }
    }
`

export const DELETE_PRODUCT=gql`
    mutation deleteProduct($productId: ID){
        deleteProduct(productId:$productId){
            _id
            number
            message
        }
    }
`