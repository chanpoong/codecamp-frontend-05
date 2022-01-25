//수정페이지
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

const FETCH_BOARD=gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            writer,
            title,
            contents
        }
    }
`

export default function BoardsEditPage(){
    const router = useRouter()

    //query는 onClick등으로 원할때 작동하는 mutation과 다르게 페이지 실행시 바로 작동되기 때문에 실행시 variabels를 받아온다
    const {data} = useQuery(FETCH_BOARD, {
        variables:{ number: Number(router.query.mynumber), }
    })


    return(
        <BoardWrite 
        isEdit={true}
        data={data}
        />
    )
}