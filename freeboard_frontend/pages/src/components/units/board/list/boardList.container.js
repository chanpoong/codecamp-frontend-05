import ContentsBoardUI from "./boardList.presenter"
import {FETCH_BOARDS, CREATE_BOARD} from "./boardList.queries"
import { useMutation, useQuery } from '@apollo/client'
import {useRouter} from 'next/router'






export default function BoardList(){
    
    const {data} = useQuery(FETCH_BOARDS)
    
    const router = useRouter()
    const onClickToBoard = (event) => {
        router.push(`/boards/${event.target.id}`)
    }
    
    const onClickCreateBoard=(event)=>{
        router.push(`/boards/new`)
    }


    return(
        <ContentsBoardUI
        data={data} 
        onClickToBoard={onClickToBoard}
        onClickCreateBoard={onClickCreateBoard}
        />
            
    )
}