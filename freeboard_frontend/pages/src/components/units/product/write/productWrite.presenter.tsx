import { useForm } from "react-hook-form";
import InputForProduct from "../../../commons/input/inputForProduct";
import * as JH from "./productWrite.styles";

export default function ProductWritePageUI(props) {
  // console.log(props.handleSubmit(props.submitProduct));
  return (
    <JH.Wrapper>
      <JH.Title>상품 등록</JH.Title>
      <form onSubmit={props.handleSubmit(props.submitProduct)}>
        <JH.BoxTitle>이름 </JH.BoxTitle>
        <InputForProduct type="text" register={props.register("name")} />
        <JH.ErrorMessage>
          {props.formState.errors?.name?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>상품명</JH.BoxTitle>
        <InputForProduct type="text" register={props.register("remarks")} />
        <JH.ErrorMessage>
          {props.formState.errors?.remarks?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>가격 </JH.BoxTitle>
        <InputForProduct type="number" register={props.register("price")} />
        <JH.ErrorMessage>
          {props.formState.errors?.price?.message}
        </JH.ErrorMessage>

        <JH.BoxTitle>내용 </JH.BoxTitle>
        <InputForProduct type="text" register={props.register("contents")} />
        <JH.ErrorMessage>
          {props.formState.errors?.contents?.message}
        </JH.ErrorMessage>

        <button>등록</button>
      </form>
    </JH.Wrapper>
  );
}
