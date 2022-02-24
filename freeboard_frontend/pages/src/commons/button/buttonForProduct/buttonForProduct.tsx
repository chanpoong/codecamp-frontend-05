import styled from "@emotion/styled";
import { withAuth } from "../../../components/commons/hocs/withAuth";

const ForProduct = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  text-align: center;
  margin: 5px;

  cursor: pointer;
  :hover {
    background-color: gold;
  }
`;

export default function ButtonForProduct(props) {
  return <ForProduct onClick={props.onClick}>{props.name}</ForProduct>;
}
