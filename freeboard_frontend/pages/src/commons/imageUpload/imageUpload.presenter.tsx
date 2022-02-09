import * as JH from "./imageUpload.styles";

export default function ImageUploadPageUI(props) {
  return (
    <>
      {/* <JH.InputPic> */}
      {props.fileUrl ? (
        <JH.Picture
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <JH.Picture1 onClick={props.onClickImage}>
          <>+</>
          <>Upload</>
        </JH.Picture1>
      )}
      <JH.Picture2
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
      {/* </JH.InputPic> */}
    </>
  );
}
