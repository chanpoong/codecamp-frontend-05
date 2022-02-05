import { createConnection } from "typeorm";

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
  })
  .catch((error) => {
    //연결 실패시 실행될 부분
    console.log(error);
  });
