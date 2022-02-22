// import ReactQuill from "react-quill"; -> 다이나믹 임포트로 변경하기
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  // const []=useState('')
  const handleChange = (value: string) => {
    // setState({ text: value })
    console.log(value);
  };
  //   if (process.browser) {
  //     console.log("im browser");
  //   } else {
  //     console.log("server");
  //   }
  return (
    <div>
      작성자: <input type="text" /> <br />
      비밀번호: <input type="password" /> <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button>등록</button>
    </div>
  );
}
