import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";

const QuillWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: ["10px", "12px", "14px"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["code-block"],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
];

const style = {
  width: "100%",
  height: "90%",
};
export default function ReactQuill(props) {
  useEffect(() => {});

  return (
    <QuillWrapper
      modules={modules}
      formats={formats}
      theme="snow"
      style={style}
      defaultValue={props.defaultValue}
      onChange={props.onChangeContents}
    />
  );
}
