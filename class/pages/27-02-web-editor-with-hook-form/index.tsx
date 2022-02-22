// import ReactQuill from "react-quill"; -> 다이나믹 임포트로 변경하기
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const handleChange = (value: string) => {
    // register로 등록하지 않고 강제로 useForm에 값을 넣어주는 기능 setValue
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // setValue를 통해 onChange 를 통해 바뀐 값을 읽어오는 명령어, 즉 onChange 됐는지 아닌지 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  return (
    <div>
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} /> <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} {...register("contents")} />
      <br />
      <button>등록</button>
    </div>
  );
}
