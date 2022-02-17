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
          aaa={props.isEdit ? props.data?.fetchUseditem.name : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.name?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>상품명</JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("remarks")}
          aaa={props.isEdit ? props.data?.fetchUseditem.remarks : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.remarks?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>가격 </JH.BoxTitle>
        <InputForProduct
          type="number"
          register={props.register("price")}
          aaa={props.isEdit ? props.data?.fetchUseditem.price : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.price?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>내용 </JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("contents")}
          aaa={props.isEdit ? props.data?.fetchUseditem.contents : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.contents?.message}
        </JH.ErrorMessage>

        <button>등록</button>
      </form>
    </JH.Wrapper>
  );
}
