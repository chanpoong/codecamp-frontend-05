import BoardDetailUI from "./boardDetail.presenter";
import { FETCH_BOARD, UPDATE_BOARD, DELETE_BOARD,LIKE_BOARD,DISLIKE_BOARD } from "./boardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react"




export default function BoardDetailPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.aaa) }
    })
    
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const [likeBoard] = useMutation(LIKE_BOARD)
    const [dislikeBoard] = useMutation(DISLIKE_BOARD)

    const [youtubeUrl, setYoutubeUrl]= useState('')
    console.log(data)
    function YoutubeUrlCheck(event){        
        setYoutubeUrl(event.target.value)        
    }

    
    const onClickUpdateBoard=(event)=>{
        router.push(`/boards/${String(router.query.aaa)}/edit`)
        
    }
    //게시글 삭제
    const onClickDelete= (event) =>{
        deleteBoard({
            variables: {
                boardId: String(router.query.aaa)
            },
            
        })
        alert('글을 삭제했습니다.')
        router.push(`/boards`)        
    }
    const onClickToBoard=(event)=>{
        router.push(`/boards`)
    }
    //게시글 좋아요
    const onClickLikeBoard=async()=>{
        await likeBoard({
            variables:{boardId: String(router.query.aaa)},
            refetchQueries: [
                {
                  query: FETCH_BOARD,
                  variables: { boardId: String(router.query.aaa) },
                },
              ],
        })
    }
    //게시글 싫어요
    const onClickDisLikeBoard=async()=>{
        await dislikeBoard({
            variables:{boardId: String(router.query.aaa)},
            refetchQueries: [
                {
                  query: FETCH_BOARD,
                  variables: { boardId: String(router.query.aaa) },
                },
              ],
        })
    }
    
    return(
    
        <BoardDetailUI 
            data={data}
            onClickUpdateBoard={onClickUpdateBoard}
            onClickDelete={onClickDelete}
            onClickToBoard={onClickToBoard}
            onClickDisLikeBoard={onClickDisLikeBoard}
            onClickLikeBoard={onClickLikeBoard}
            YoutubeUrlCheck={YoutubeUrlCheck}
            youtubeUrl={youtubeUrl}
        />
        

    
        
    )
}