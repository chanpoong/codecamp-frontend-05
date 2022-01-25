import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD,UPDATE_BOARD } from "./BoardWrite.queries"
import { useState } from "react"
import {useRouter} from 'next/router'
import { useMutation } from '@apollo/client'

export default function MyPage(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    

    const [name, setName]= useState('')
    const [nameError, setNameError]= useState('')

    const [password, setPassword]= useState('')     
    const [passwordError, setPasswordError]= useState('')

    const [title, setTitle]= useState('')     
    const [titleError, setTitleError]= useState('')
    
    const [txt, setTxt]= useState('')     
    const [txtError, setTxtError]= useState('')
    const [getYoutubeUrl, setYoutubeUrl]= useState('')
    // const [contentsNum, setNumber] = useState('')

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    
     // 게시물 생성 함수
     const submitBoard = async() => {
        const result= await createBoard({
            variables: {
                    writer: name,
                    password: password,
                    title:title, 
                    contents: txt,
                    youtubeUrl:getYoutubeUrl

                }
            }
            
        );
        
        router.push(`/boards/${result?.data?.createBoard?._id}`)
    }
    
    //게시물 수정 함수
    const EditBoard = async() =>{
        try{
            const myVariables={
            boardId: String(router.query.aaa),
            password: password,
            updateBoardInput:{
                title:title,
                contents:txt
                }
            }

            if(title!=='')myVariables.title=title
            if(txt!=='') myVariables.contents=txt
            if(name!=='') myVariables.writer=name
            
            await updateBoard({
                variables: myVariables
                
            });
        }
        catch(error){
            alert(error.message)
        }
        
        router.push(`/boards/${router.query.aaa}`)
        
    }
    

    //빈칸체크 후 공백이아니라면 에러메세지 삭제
    function nameCheck(event){
        
        setName(event.target.value);        
        if (event.target.value !== ''){
            setNameError('');
            if(event.target.value&&title&&txt&&password){
                setIsActive(true)
            }else if(event.target.value==='' ||title===''||txt===''||password===''){
                setIsActive(false)
            }
            
        
        }else if (event.target.value === ''){
            setIsActive(false)
        }
        
    }
    function YoutubeUrlCheck(event){        
        setYoutubeUrl(event.target.value)        
    }

    function passwordCheck(event){
        
        setPassword(event.target.value)
        if (event.target.value !== ''){
            setPasswordError('');
            if(name&&password&&txt&&event.target.value){
                setIsActive(true)
            }else if(name==='' ||password===''||txt===''||event.target.value===''){
                setIsActive(false)
            }
            
        }else if (event.target.value === ''){
            setIsActive(false)
        }
        
    }

    function titleCheck(event){
        
        setTitle(event.target.value)        
        if (event.target.value !== ''){
            setTitleError('');
            if(name&&event.target.value&&txt&&password){
                setIsActive(true)
            }else if(name==='' ||event.target.value===''||txt===''||password===''){
                setIsActive(false)
            }
            
        }else if (event.target.value === ''){
            setIsActive(false)
        }
        
        
    }

    function txtCheck(event){
        setTxt(event.target.value);
       
        if (event.target.value !== ''){
            setTxtError('');
            if(name&&title&&event.target.value&&password){
                setIsActive(true)
            }else if(name==='' ||title===''||event.target.value===''||password===''){
                setIsActive(false)
            }
            
        }else if (event.target.value === ''){
            setIsActive(false)
        }
        
    }

   
    
    


    // 공란 체크 함수
    function ValueCheck(event){
        if(!name){
            setNameError('작성자를 입력해주세요.')
        }else if(!password){
            setPasswordError('비밀번호를 입력해주세요')
        }else if(!title){
            setTitleError('제목을 입력해주세요')
        }else if(!txt){ 
            setTxtError('내용을 입력해주세요')
        } else {            
            if (confirm('저장하시겠습니까?')===true){
                `${props.isEdit ? EditBoard() : submitBoard() }`
                alert(`게시물 ${props.isEdit ? '수정' : '등록'}이 완료되었습니다`)
                   
                }else{
                return false;
            }
        }
    }  
    function ClickCansle(event){
        if (confirm('작성을 취소하시겠습니까? \n작성중이던 내용은 삭제됩니다')===true){
            router.push(`/boards/${router.query.aaa}`)
        }else{
            return false;
        }
    }

    return(
        <BoardWriteUI 
        name={name}
        title={title}
        txt={txt}
        password={password}
        nameCheck={nameCheck}
        passwordCheck={passwordCheck}
        titleCheck={titleCheck}
        txtCheck={txtCheck}
        ValueCheck={ValueCheck}
        ClickCansle={ClickCansle}
        nameError={nameError}
        passwordError={passwordError}
        titleError={titleError}
        txtError={txtError}
        isActive={isActive}
        isEdit={props.isEdit}
        EditBoard={EditBoard}
        data={props.data}
        YoutubeUrlCheck={YoutubeUrlCheck}
        
        />
    )
}
