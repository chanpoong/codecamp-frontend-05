import { useForm } from "react-hook-form";

interface FormValues {
  myWriter?: string;
  myTitle?: string;
  myContents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  //register : state생성
  // handleSubmit : 등록

  const onClickSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("myWriter")} />
      제목: <input type="text" {...register("myTitle")} />
      내용: <input type="text" {...register("myContents")} />
      <button type="submit">등록하기</button>
      <div>================</div>
    </form>
  );
}
