import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkFileValidation } from "../../src/commons/libraries/utils";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) {
      setImage(" ");
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      console.log(result?.data?.uploadFile?.url);
      setImage(result?.data?.uploadFile?.url || "");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClickImage}
      >
        +
      </div>
      <img src={`https://storage.googleapis.com/${image}`} />

      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef}
      />
    </div>
  );
}
