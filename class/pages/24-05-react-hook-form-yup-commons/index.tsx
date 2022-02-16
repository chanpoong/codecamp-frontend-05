import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

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
      이메일 <Input01 type="text" register={register("myEmail")} />
      <div>{formState.errors?.myEmail?.message}</div>
      비밀번호 <Input01 type="password" register={register("myPassword")} />
      <div>{formState.errors?.myPassword?.message}</div>
      <Button01 type="submit" isValid={formState.isValid} title="로그인" />
      <div>================</div>
    </form>
  );
}
