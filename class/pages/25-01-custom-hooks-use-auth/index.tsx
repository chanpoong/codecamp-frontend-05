import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();
  if (isLoading) return <></>;
  return (
    <div>
      <div>커스텀 훅 연습페이지 - 권한분기</div>
      <div>로그인을 환영합니다</div>
    </div>
  );
}
