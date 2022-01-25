import {gql, useQuery} from '@apollo/client'
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

const Column=styled.div`
    width: 20%;
    margin-bottom: 10px;
`
const Row=styled.div`
    display: flex;
    flex-direction: row;
`

export default function MapCheckboxPage(){
    const {data}=useQuery(FETCH_BOARDS)



    return(
        <div>
            {data?.fetchBoards.map((el)=>(
                <Row key={el.number}>
                    <span><input type='checkbox'/></span>
                    <Column>게시글 번호: {el.number}</Column>
                    <Column>작성자: {el.writer}</Column>
                    <Column>제목: {el.title}</Column>
                    <Column>작성일: {el.createdAt}</Column>
                </Row>
            ))}
        </div>
    )
}