import styled from '@emotion/styled'
import { IMyButtonProps } from './BoardWrite.types'

export const Myinput = styled.input`
    background-color: rosybrown;
`

// interface IProps{
//     ggg: boolean
// }
export const MyButton = styled.button`
    background-color: ${(props:IMyButtonProps)=>props.ggg === true ? 'yellow' : 'none'};
`