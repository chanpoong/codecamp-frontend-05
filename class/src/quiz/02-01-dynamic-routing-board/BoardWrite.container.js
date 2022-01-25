import {useRouter} from 'next/router'
import DynamicRoutingPresenter from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'
import { useMutation } from '@apollo/client'

export default function DynamicRoutingPage() {
    const router=useRouter() 
    const [createProduct] = useMutation(CREATE_BOARD)
    
    const result = createProduct
    console.log(result.createProduct)

    
    
    const onClickMove1 =()=>{
        router.push('/05-06-dynamic-routed-board/1')
    }
    const onClickMove2 =()=>{
        router.push('/05-06-dynamic-routed-board/2')
    }
    const onClickMove3 =()=>{
        router.push('/05-06-dynamic-routed-board/3')
    }
    const onClickMove4 =()=>{
        router.push('/05-06-dynamic-routed-board/4')
    }
    const onClickMove100 =()=>{
        router.push('/05-06-dynamic-routed-board/100')
    }
    return(
        <DynamicRoutingPresenter 
        onClickMove1={onClickMove1}
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3}
        onClickMove4={onClickMove4}
        onClickMove100={onClickMove100}
        />
    )
}