import { DatePicker, Space } from 'antd';
import {useState} from 'react'

export default function CalendarPage(){
    const [date, setDate]=useState('')

    function onChange(date, dateString) {
        
        console.log(date, dateString);
    }

    const onClickShowDate = (event) =>{
        setDate(event.target.value)
        console.log(date)
    }

    return(
        <Space direction="vertical">
            <DatePicker onChange={onChange}onClick={onClickShowDate}  />
            
            <div>
                {date}
            </div>
            
        </Space>
        
    );
}