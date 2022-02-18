import { useForm } from "react-hook-form";
import InputForProduct from "../../../commons/input/inputForProduct";
import * as JH from "./productWrite.styles";

export default function ProductWritePageUI(props) {
  // console.log(props.handleSubmit(props.submitProduct));

  return (
    <JH.Wrapper>
      <JH.Title>게시물 {props.isEdit ? "수정" : "등록"}</JH.Title>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.EditProduct)
            : props.handleSubmit(props.submitProduct)
        }
      >
        <JH.BoxTitle>이름 </JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("name")}
          defaultValue={props.isEdit ? props.data?.fetchUseditem.name : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.name?.message}
        </JH.ErrorMessage>
        <JH.BoxTitle>상품명</JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("remarks")}
          defaultValue={props.isEdit ? props.data?.fetchUseditem.remarks : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.remarks?.message}
        </JH.ErrorMessage>
        <JH.BoxTitle>가격 </JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("price")}
          defaultValue={props.isEdit ? props.data?.fetchUseditem.price : 0}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.price?.message}
        </JH.ErrorMessage>
        <JH.BoxTitle>내용 </JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("contents")}
          defaultValue={props.isEdit ? props.data?.fetchUseditem.contents : ""}
        />
        )
        <JH.ErrorMessage>
          {props.formState.errors?.contents?.message}
        </JH.ErrorMessage>
        <button>등록</button>
      </form>
    </JH.Wrapper>
  );
}
