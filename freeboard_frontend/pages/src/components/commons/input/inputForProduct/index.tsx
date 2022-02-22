import styled from "@emotion/styled";

const ForProduct = styled.input``;

export default function InputForProduct(props) {
  return (
    <ForProduct
      type={props.type}
      {...props.register}
      defaultValue={props.defaultValue}
    />
  );
}
