import { ChangeEvent, useState } from "react"
import { gql, useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationCreateBoardArgs,
    IMutationUploadFileArgs,
  } from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const CREATE_BOARD=gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
        }
    }
`



export default function ImageUploadSubmitPage(){
    const [imageUrl, setImageUrl]=useState('') // fake image url state
    const [file1, setFile1]=useState<File>() // file type 

    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
   const [createBoard]=useMutation<Pick<IMutation, "createBoard" >, IMutationCreateBoardArgs>(CREATE_BOARD)

    const onChangeFile=(e: ChangeEvent<HTMLInputElement>)=>{

        //미리보기 생성
       const file = e.target.files?.[0]
       console.log (file)
       if(!file){
           alert("CANNOT FIND FILE")
           return
       }

       const fileReader = new FileReader
       fileReader.readAsDataURL(file)
       fileReader.onload=(data)=>{
           if(typeof data.target?.result === "string"){
            console.log(data.target?.result)
            setImageUrl(data.target?.result || "")
            setFile1(file)
           }
        
       }

    }


    const onClickSubmit=async ()=>{
        // 이미지 한개 업로드
        // 1. 이미지 업로드, -uploadFile() 쿼리를 실행
        const result= await uploadFile({
            variables: {
                file: file1
            }
        })
        const imageUrl = result.data?.uploadFile.url || ""
        // 2. createBoard 쿼리로 게시물 등록
        // 기본 정보는 하드코딩으로 전송하고 uploadFile로부터 받아온 imageUrl 전송
        const result2 = await createBoard({
            variables:{
                createBoardInput:{
                    title: '놀자에요' ,
                    writer: '로아' ,
                    contents: '놀자',
                    password: '123',
                    images:[imageUrl]
                }
            }
        })
        console.log(result2.data?.createBoard._id)
    }
    return (
        <div>
            <img src={imageUrl} />
            <input type='file' onChange={onChangeFile} />
            <button onClick={onClickSubmit}>submit</button>
        </div>
    )
}