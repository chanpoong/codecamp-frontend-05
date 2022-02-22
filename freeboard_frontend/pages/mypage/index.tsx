import { withAuth } from "../src/components/commons/hocs/withAuth";
import MyPage from "../src/components/units/mypage/mypage.container";

export default withAuth(MyPage);
