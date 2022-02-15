import { withAuth } from "../src/components/commons/hocs/withAuth";
import ProductListPage from "../src/components/units/product/list/productList.container";

export default withAuth(ProductListPage);
