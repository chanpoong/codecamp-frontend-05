import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../../../_app";
import { CREATE_USED_ITEM } from "./productWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as JH from "./productWrite.styles";
import ProductWritePageUI from "./productWrite.presenter";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "2자 이상은 입력해야합니다")
    .required("이름은 필수 입력 사항입니다."),
  price: yup
    .number()
    .moreThan(5000, "5000원 이상의 값을 입력해주세요")
    .required("가격은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(10, "10자 이상 입력해야 합니다")
    .required("내용은 필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
});
interface IRegister {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
}

export default function ProductWritePage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const { userInfo, setUserInfo } = useContext(GlobalContext);

  const submitProduct = async (input: IRegister) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: input.name,
          remarks: input.remarks,
          contents: input.contents,
          price: Number(input.price),
        },
      },
    });

    router.push("/products");
  };

  return (
    <ProductWritePageUI
      handleSubmit={handleSubmit}
      submitProduct={submitProduct}
      register={register}
      formState={formState}
    />
  );
}
