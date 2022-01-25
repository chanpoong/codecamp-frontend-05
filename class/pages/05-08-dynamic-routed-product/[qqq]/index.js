import {useRouter} from 'next/router'
import {useQuery,gql} from '@apollo/client'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`


export default function DynamicRoutedPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.qqq
        }
    })

    console.log(data)

    return(
        <>
            <div>판매자: {data?.fetchProduct?.seller}</div>
            <div>상품명: {data?.fetchProduct?.name}</div>
            <div>가격: {data?.fetchProduct?.price}</div>
            <div>내용: {data?.fetchProduct?.detail}</div>
        </>

    )
}