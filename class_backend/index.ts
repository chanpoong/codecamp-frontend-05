import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board_postgres";
import { argsToArgsConfig } from "graphql/type/definition";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  input CreateBoardInput {
    writer: String!
    title: String!
    age: Int!
  }
  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    deleteBoard(number: Int!): String
  }
`;
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //DB와 연결해 조회 및 프론트로 전달
      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);
      return "fetchBoards를 요청하셨습니다.";
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // age: args.createBoardInput.age,
      });
      //DB와 연결해 데이터 저장
      return "createBoard를 요청하셨습니다.";
    },
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "삭제가 완료되었습니다.";
    },
  },
};
const server = new ApolloServer({
  //여기를 프록시서버라고 부름
  typeDefs,
  resolvers,
  cors: true, // api요청시 cors에러를 없애줌
  //백엔드 끼리의 통신은 cors에러가 뜨지않음 (Br가 아니기 때문)
});

console.log("hello typescript");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5019,
  host: "34.64.187.209",
  entities: ["./*_postgres.ts"],
  logging: true,
  synchronize: true, // 백앤드를 DB와 동기화해주는 옵션
})
  .then(() => {
    //연결 성공시 실행될 부분
    console.log("connected");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    //연결 실패시 실행될 부분
    console.log(error);
  });
