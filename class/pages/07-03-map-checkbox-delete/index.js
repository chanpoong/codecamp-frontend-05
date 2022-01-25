import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD=gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Column=styled.div`
    width: 20%;
    margin-bottom: 10px;
`
const Row=styled.div`
    display: flex;
    flex-direction: row;
`

export default function MapCheckboxDeletePage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data}=useQuery(FETCH_BOARDS)

    const onClickDelete= (event) =>{
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{query:FETCH_BOARDS}]
        })        
    }


    return(
        <div>
            {data?.fetchBoards.map((el)=>(
                <Row key={el.number}>
                    <span><input type='checkbox'/></span>
                    <Column>게시글 번호: {el.number}</Column>
                    <Column>작성자: {el.writer}</Column>
                    <Column>제목: {el.title}</Column>
                    <Column>작성일: {el.createdAt}</Column>
                    <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>
                </Row>
            ))}
        </div>
    )
}