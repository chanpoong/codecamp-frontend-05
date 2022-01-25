import {Rate} from 'antd'
import {useState} from 'react'



export default function LibraryyPage() {
    const [value, setValue]=useState(1);

    const handleChange=(value)=>{
        setValue(value);
    }

    return(
        
            <Rate onChange={handleChange} value={value}/>
        
    
    )
}