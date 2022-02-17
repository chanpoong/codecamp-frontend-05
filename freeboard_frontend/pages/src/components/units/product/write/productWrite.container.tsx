import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../../../_app";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./productWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as JH from "./productWrite.styles";
import ProductWritePageUI from "./productWrite.presenter";
import { IRegister, IVariables } from "./productWrite.types";
import { Modal } from "antd";

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

export default function ProductWritePage(props) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

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
  const EditProduct = async (input: IRegister) => {
    console.log(input);
    try {
      const variables: IVariables = {};

      if (input.name) variables.name = input.name;
      if (input.remarks) variables.remarks = input.remarks;
      if (input.contents) variables.contents = input.contents;
      if (input.price) variables.price = input.price;
      if (input.images) variables.images = input.images;

      await updateUseditem({
        variables: {
          useditemId: String(router.query.detail),
          updateUseditemInput: variables,
        },
      });

      Modal.success({
        content: `게시물 ${props.isEdit ? "수정" : "등록"}이 완료되었습니다`,
      });
    } catch (error) {}
  };

  return (
    <ProductWritePageUI
      data={props.data}
      isEdit={props.isEdit}
      handleSubmit={handleSubmit}
      submitProduct={submitProduct}
      register={register}
      formState={formState}
      EditProduct={EditProduct}
    />
  );
}
