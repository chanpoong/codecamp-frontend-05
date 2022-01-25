import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENT, DELETE_BOARD_COMMENT } from "./boardCommentList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListPageUI from "./boardCommentList.presenter";

import { useState } from "react";

export default function BoardCommentListPage(){
    const router = useRouter()
    

    const [commentWriter, setCommentWriter]=useState('')
    const [commentPassword, setCommentPassword]=useState('')
    const [commentRating, setCommentRating]=useState(0.0)
    const [commentContents, setCommentContents]=useState('')
    
    
    
    const {data} = useQuery(FETCH_BOARD_COMMENT,{
        variables:{boardId:String(router.query.aaa)}
    })

    

    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT)
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)


    function onChangeCommentWriter(event){
        setCommentWriter(event.target.value);
    }
    function onChangeCommentPassword(event){
        setCommentPassword(event.target.value);
    }
    function onChangeCommentContents(event){
        setCommentContents(event.target.value);
    }
    function onChangeCommentRating(value){
        setCommentRating(value);
    }
    
        
    
    
    //댓글 작성 함수
    const submitComment = async() => {
        try{
            const result= await createBoardComment({
                variables: {
                    boardId:String(router.query.aaa),
                    createBoardCommentInput:{
                        writer:commentWriter,
                        password:commentPassword,
                        contents:commentContents,
                        rating:commentRating
                        },
                        
                    },
                           
                    refetchQueries: [
                        {
                          query: FETCH_BOARD_COMMENT,
                          variables: { boardId: String(router.query.aaa) },
                        },
                      ],
                }
                
            );
        
        }
        catch(error){
            alert(error.message)
        }        
        
    }

    
    // 댓글 삭제 함수
    const deleteComment=async(event)=>{
        if(confirm('정말 삭제하시겠습니까?')===true){
            const PW = prompt('비밀번호를 입력하세요')
            try{
                
                await deleteBoardComment({
                    variables:{
                        password:PW,
                        boardCommentId:event?.target?.id},
                        refetchQueries: [
                        {
                        query: FETCH_BOARD_COMMENT,
                        variables: { boardId: String(router.query.aaa) },
                        },
                    ],
                }); alert('삭제가 완료되었습니다.')
            }catch(error){
                alert(error.message)
            }}else{
                alert('취소했습니다.')
            }}
            

      
        
    return(
        <BoardCommentListPageUI
        data={data}
        onChangeCommentWriter={onChangeCommentWriter}
        onChangeCommentPassword={onChangeCommentPassword}
        onChangeCommentContents={onChangeCommentContents}
        onChangeCommentRating={onChangeCommentRating}
        deleteComment={deleteComment}
        submitComment={submitComment}
        commentWriter={commentWriter}
        commentPassword={commentPassword}
        commentRating={commentRating}
        commentContents={commentContents}

        />
    )
}