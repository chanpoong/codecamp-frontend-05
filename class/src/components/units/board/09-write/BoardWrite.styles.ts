import styled from '@emotion/styled'

export const Myinput = styled.input`
    background-color: rosybrown;
`

// interface IProps{
//     ggg: boolean
// }
export const MyButton = styled.button`
    background-color: ${(props)=>props.ggg === true ? 'yellow' : 'none'};
`