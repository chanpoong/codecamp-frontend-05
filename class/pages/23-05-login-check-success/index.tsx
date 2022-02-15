import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인이 필요합니다");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>;
};

export default withAuth(LoginSuccessPage);
