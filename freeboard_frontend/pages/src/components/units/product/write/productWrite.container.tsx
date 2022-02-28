import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./productWrite.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import ProductWritePageUI from "./productWrite.presenter";
import { IRegister, IVariables, IFormValues } from "./productWrite.types";
import { Modal } from "antd";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "2자 이상은 입력해야합니다")
    .required("이름은 필수 입력 사항입니다."),
  price: yup
    .number()
    .moreThan(99, "100원 이상의 값을 입력해주세요")
    .required("가격은 필수 입력 사항입니다."),
  contents: yup
    .string()
    .min(10, "10자 이상 입력해야 합니다")
    .required("내용은 필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
});

export default function ProductWritePage(props) {
  const router = useRouter();
  const [images, setImages] = useState(["", "", ""]);

  const { register, handleSubmit, formState, setValue } = useForm<IFormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const submitProduct = async (input: IRegister) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: input.name, //상품명
            remarks: input.remarks, //한줄 요약
            contents: input.contents, //내용
            price: Number(input.price), //가격
            images,
          },
        },
      });
      Modal.success({ content: `게시글 작성을 완료했습니다.` });
      router.push("/products");
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };
  const EditProduct = async (input: IRegister) => {
    try {
      const variables: IVariables = {};

      if (input.name) variables.name = input.name;
      if (input.remarks) variables.remarks = input.remarks;
      if (input.contents) variables.contents = input.contents;
      if (input.price) variables.price = input.price;
      if (images) variables.images = images;

      await updateUseditem({
        variables: {
          useditemId: String(router.query.detail),
          updateUseditemInput: variables,
        },
      });

      Modal.success({
        content: `게시물 ${props.isEdit ? "수정" : "등록"}이 완료되었습니다`,
      });
      router.push("/products");
    } catch (error) {
      Modal.error({ content: `${error.message}` });
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...images];
    newFileUrls[index] = fileUrl;
    setImages(newFileUrls);
  };

  useEffect(() => {
    if (props.isEdit) {
      setImages(props.data?.fetchUseditems?.images);
    }
    setValue("name", props.data?.fetchUseditem.name);
    setValue("remarks", props.data?.fetchUseditem.remarks);
    setValue("contents", props.data?.fetchUseditem.contents);
    setValue("price", props.data?.fetchUseditem.price);
  }, [props.data]);

  return (
    <ProductWritePageUI
      data={props.data}
      isEdit={props.isEdit}
      handleSubmit={handleSubmit}
      submitProduct={submitProduct}
      register={register}
      formState={formState}
      images={images}
      EditProduct={EditProduct}
      onChangeFileUrls={onChangeFileUrls}
    />
  );
}
