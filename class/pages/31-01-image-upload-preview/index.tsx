import { ChangeEvent, useState } from "react"

export default function ImageUploadPreviewPage(){
    const [imageUrl, setImageUrl]=useState('')

    const onChangeFile=(e: ChangeEvent<HTMLInputElement>)=>{
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
           }
        
       }

    }

    return (
        <div>
            <img src={imageUrl} />
            <input type='file' onChange={onChangeFile} />
        </div>
    )
}