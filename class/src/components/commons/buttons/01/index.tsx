import styled from "@emotion/styled";

interface IBtnProps {
  isValid?: boolean;
}
interface IProps {
  type?: string;

  title?: string;
}

const Btn = styled.button`
  background-color: ${(props: IBtnProps) => (props.isValid ? "yellow" : "")};
`;

export default function Button01(props) {
  return (
    <Btn type={props.type} isValid={props.isValid}>
      {props.title}
    </Btn>
  );
}
