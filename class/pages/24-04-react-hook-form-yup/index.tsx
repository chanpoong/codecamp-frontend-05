import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

interface IBtnProps {
  isValid: boolean;
}

const Btn = styled.button`
  background-color: ${(props: IBtnProps) => (props.isValid ? "yellow" : "")};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 맞지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자 이상 입력해야 합니다.")
    .max(15, "비밀번호는 15자를 초과할 수 없습니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface FormValues {
  myEmail?: string;
  myPassword?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  //register : state생성
  // handleSubmit : 등록

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors?.myEmail?.message}</div>
      비밀번호: <input type="text" {...register("myPassword")} />
      <div>{formState.errors?.myPassword?.message}</div>
      <Btn type="submit" isValid={formState.isValid}>
        로그인
      </Btn>
      <div>================</div>
    </form>
  );
}
