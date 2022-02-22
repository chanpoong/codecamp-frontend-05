// // import ReactQuill from "react-quill"; -> 다이나믹 임포트로 변경하기
// import "react-quill/dist/quill.snow.css";
// import dynamic from "next/dynamic";
// import { useForm } from "react-hook-form";
// import { gql, useMutation } from "@apollo/client";
// import {
//   IMutation,
//   IMutationCreateBoardArgs,
// } from "../../src/commons/types/generated/types";
// import { useRouter } from "next/router";
// import { Modal } from "antd";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//     }
//   }
// `;
// interface IFormValues {
//   writer?: string;
//   password?: string;
//   title?: string;
//   contents?: string;
// }
// export default function WebEditorPage() {
//   const router = useRouter();
//   const [createBoard] = useMutation<
//     Pick<IMutation, "createBoard">,
//     IMutationCreateBoardArgs
//   >(CREATE_BOARD);
//   1;
//   const { register, handleSubmit, setValue, trigger } = useForm<IFormValues>({
//     mode: "onChange",
//   });
//   const handleChange = (value: string) => {
//     // register로 등록하지 않고 강제로 useForm에 값을 넣어주는 기능 setValue
//     setValue("contents", value === "<p><br></p>" ? "" : value);
//     // setValue를 통해 onChange 를 통해 바뀐 값을 읽어오는 명령어, 즉 onChange 됐는지 아닌지 react-hook-form에 알려주는 기능
//     trigger("contents");
//   };

//   const onClickSubmit = async (data: IFormValues) => {
//     if (!(data.contents && data.password && data.title && data.writer)) {
//       Modal.warning({ content: "필수 입력 사항 입니다" });
//       return;
//     }
//     try {
//       const result = await createBoard({
//         variables: {
//           createBoardInput: {
//             writer: data.writer,
//             password: data.password,
//             title: data.title,
//             contents: data.contents,
//           },
//         },
//       });
//       router.push(`/27-04-web-editor-detail/${result.data?.createBoard._id}`);
//     } catch (error) {
//       Modal.error(error.message);
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit(onClickSubmit)}>
//       작성자: <input type="text" {...register("writer")} /> <br />
//       비밀번호: <input type="password" {...register("password")} /> <br />
//       제목: <input type="text" {...register("title")} />
//       <br />
//       내용: <ReactQuill onChange={handleChange} {...register("contents")} />
//       <br />
//       <button>등록</button>
//     </form>
//   );
// }
import { useState } from "react";
// import ReactQuill from "react-quill"; 다이나믹 임포트로 변경하기!!
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}
export default function WebEditorPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br/></p>" ? "" : value);
    // onChange가 되었는지 안되었는지 react-hook-form 에서 알려주는 기능
    trigger("contents");
    // register로 둥록하지 않고 강제로 등록허면 가능!!
  };

  const onClickSubmit = async (data: IFormValues) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("필수 입력 사항입니다!");
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <br />
      비밀번호 : <input type="password" {...register("password")} />
      <br />
      제목 : <input type="text" {...register("title")} />
      <br />
      {/* 내용 : <textarea /> */}
      내용 : <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
