import styled from "@emotion/styled";

const ForProduct = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 400px;
  padding: 5px;
`;

export default function TextareaForProduct(props) {
  return (
    <ForProduct
      type={props.type}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
