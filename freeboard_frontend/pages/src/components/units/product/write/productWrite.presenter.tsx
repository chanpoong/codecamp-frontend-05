import InputForProduct from "../../../commons/input/inputForProduct";
import * as JH from "./productWrite.styles";
import { v4 as uuidv4 } from "uuid";
import ImagesUploadForProduct from "../../../../commons/imageUploadForProduct/imageUploadForProduct.container";
import TextareaForProduct from "../../../commons/input/textareaForProduct";

export default function ProductWritePageUI(props) {
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
        <JH.InnerWrapper>
          <JH.BoxTitle>제목 </JH.BoxTitle>
          <InputForProduct
            type="text"
            register={props.register("name")}
            defaultValue={props.isEdit ? props.data?.fetchUseditem.name : ""}
          />
          <JH.ErrorMessage>
            {props.formState.errors?.name?.message}
          </JH.ErrorMessage>
          <JH.SubInput>
            <JH.BoxTitle>한줄요약</JH.BoxTitle>
            <InputForProduct
              type="text"
              register={props.register("remarks")}
              // defaultValue={
              //   props.isEdit ? props.data?.fetchUseditem.remarks : ""
              // }
            />
            <JH.ErrorMessage>
              {props.formState.errors?.remarks?.message}
            </JH.ErrorMessage>
            <JH.BoxTitle>가격</JH.BoxTitle>
            <InputForProduct
              type="text"
              register={props.register("price")}
              defaultValue={props.isEdit ? props.data?.fetchUseditem.price : 0}
            />
            <JH.ErrorMessage>
              {props.formState.errors?.price?.message}
            </JH.ErrorMessage>
          </JH.SubInput>

          <JH.BoxTitle>내용 </JH.BoxTitle>
          <TextareaForProduct
            type="textarea"
            register={props.register("contents")}
            defaultValue={
              props.isEdit ? props.data?.fetchUseditem.contents : ""
            }
          />
          <JH.ErrorMessage>
            {props.formState.errors?.contents?.message}
          </JH.ErrorMessage>

          <JH.ImageUploadWrapper>
            {props.images?.map((el, index) => (
              <ImagesUploadForProduct
                data={props.data}
                images={el}
                index={index}
                key={uuidv4}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </JH.ImageUploadWrapper>
          <button>등록</button>
        </JH.InnerWrapper>
      </form>
    </JH.Wrapper>
  );
}
