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
    const [imageUrls, setImageUrls]=useState(['','','']) // fake image url state
    const [files, setFiles]=useState<(File| undefined)[]>([ undefined,undefined,undefined]) // file type 

    const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
   const [createBoard]=useMutation<Pick<IMutation, "createBoard" >, IMutationCreateBoardArgs>(CREATE_BOARD)

    const onChangeFile=(num: number)=>(e: ChangeEvent<HTMLInputElement>)=>{

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
            const tempUrls= [...imageUrls]
            tempUrls[num] = data.target?.result
            setImageUrls(tempUrls)

            
                const tempFiles= [...files]
                tempFiles[num]=file
                setFiles(tempFiles)
            
            
           }
        
       }

    }


    const onClickSubmit=async ()=>{
        // 이미지 한개 업로드
        // 1. 이미지 업로드, -uploadFile() 쿼리를 실행
        const start = performance.now() 
        const results = await Promise.all(
        files?.map((el)=> el && uploadFile({
                variables: {
                    file: el,
                }
            })
        )
        )
        console.log(results)
        const resultUrls = results.map((el) => el?.data ? el.data?.uploadFile.url : "")
        console.log(resultUrls)
        const end = performance.now()
        console.log(end-start)
        // const imageUrl = result.data?.uploadFile.url || ""
        // 2. createBoard 쿼리로 게시물 등록
        // 기본 정보는 하드코딩으로 전송하고 uploadFile로부터 받아온 imageUrl 전송
        const result2 = await createBoard({
            variables:{
                createBoardInput:{
                    title: '놀자에요' ,
                    writer: '로아' ,
                    contents: '놀자',
                    password: '123',
                    images: resultUrls
                }
            }
        })
        console.log(result2.data?.createBoard._id)
    }
    return (
        <div>
            <img src={imageUrls[0]} />
            <img src={imageUrls[1]} />
            <img src={imageUrls[2]} />
            <input type='file' onChange={onChangeFile(0)} />
            <input type='file' onChange={onChangeFile(1)} />
            <input type='file' onChange={onChangeFile(2)} />
            <button onClick={onClickSubmit}>submit</button>
        </div>
    )
}