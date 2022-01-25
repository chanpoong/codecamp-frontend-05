import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createProduct($seller: String , $createProductInput: CreateProductInput! ){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`