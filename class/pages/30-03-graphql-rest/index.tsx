import axios from "axios"

export default function GraphqlRestPage(){
  
  const onClickGraphql =()=>{
    axios.post(
      "http://backend05.codebootcamp.co.kr/graphql",
      {
        query: `
        mutation createBoard {
           createBoard(
             createBoardInput:{
               writer: "goran", password:"123", title:"title", contents:"contents"
              } 
              ){
                _id, writer
              }
            }`
      }
    )
  }
  return (
    <div>
      <button onClick={onClickGraphql}>
      GQL Axios test
      </button>
    </div>
  )
}