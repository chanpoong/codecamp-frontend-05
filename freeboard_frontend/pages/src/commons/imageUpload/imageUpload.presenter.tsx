import * as JH from "./imageUpload.styles";

export default function ImageUploadPageUI(props) {
  return (
    <>
      {props.images ? (
        <JH.Picture
          onClick={props.onClickImage}
          src={`https://storage.googleapis.com/${props.images}`}
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
    </>
  );
}
