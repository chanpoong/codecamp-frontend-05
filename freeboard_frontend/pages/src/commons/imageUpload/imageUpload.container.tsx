import { UPLOAD_FILE } from "./imageUpload.queries";
import { checkFileValidation } from "../libraries/utils";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../src/commons/types/generated/types";
import { ChangeEvent, useRef } from "react";
import ImageUploadPageUI from "./imageUpload.presenter";

export default function ImageUploadPage(props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickImage = () => {
    fileRef.current?.click();
  };
  //   const [uploadFile] = useMutation(UPLOAD_FILE);

  //파일 업로드 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data?.uploadFile?.url, props.index);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ImageUploadPageUI
      fileRef={fileRef}
      image={props.image}
      defaultFileUrl={props.defaultFileUrl}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
    />
  );
}
