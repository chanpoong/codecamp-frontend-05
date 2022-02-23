import { useContext } from "react";
import { GlobalContext } from "../../../../../_app";
import InputForProduct from "../../../commons/input/inputForProduct";
import * as JH from "./productWrite.styles";
import { v4 as uuidv4 } from "uuid";
import ImagesUploadForProduct from "../../../../commons/imageUploadForProduct/imageUploadForProduct.container";

export default function ProductWritePageUI(props) {
  // console.log(props.handleSubmit(props.submitProduct));
  const { onChangeSelectServer } = useContext(GlobalContext);
  console.log(props.data?.fetchUseditem?.images);
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
        <JH.BoxTitle>제목 </JH.BoxTitle>
        <InputForProduct
          type="text"
          register={props.register("name")}
          defaultValue={props.isEdit ? props.data?.fetchUseditem.name : ""}
        />
        <JH.ErrorMessage>
          {props.formState.errors?.name?.message}
        </JH.ErrorMessage>
        <div>
          <div>서버</div>
          <select onChange={onChangeSelectServer}>
            <option disabled={true} selected={true}>
              서버를 선택해주세요
            </option>
            <option>루페온</option>
            <option>실리안</option>
            <option>아만</option>
            <option>카마인</option>
            <option>카제로스</option>
            <option>아브렐슈드</option>
            <option>카단</option>
            <option>니나브</option>
          </select>
        </div>
        <JH.BoxTitle>한줄요약</JH.BoxTitle>
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

        <JH.ErrorMessage>
          {props.formState.errors?.contents?.message}
        </JH.ErrorMessage>
        <div>
          {props.images.map((el, index) => (
            <ImagesUploadForProduct
              data={props.data}
              images={el}
              setImages={props.setImages}
              index={index}
              key={uuidv4}
            />
          ))}
        </div>
        <button>등록</button>
      </form>
    </JH.Wrapper>
  );
}
