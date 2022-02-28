import { useState } from "react";
import { withAuth } from "../src/components/commons/hocs/withAuth";
import MyPage from "../src/components/units/mypage/boughtSoldList/mypage.container";
import { Menu } from "antd";
import PaymentListPage from "../src/components/units/mypage/paymentList/paymentList.container";
import FreeBoardsOfMinePage from "../src/components/units/mypage/freeBoardsOfMine/freeBoardsOfMine.container";
import ProductIPickedPage from "../src/components/units/mypage/productIPicked/productIPicked.container";

export default function MyPageIndex() {
  const [paymentList, setPaymentList] = useState(false);
  const [soldAndBought, setSoldAndBought] = useState(true);
  const [boardsOfMine, setBoardsOfMine] = useState(false);
  const [productIPicked, setProductIPicked] = useState(false);
  const onClickPaymentList = () => {
    setPaymentList(true);
    setSoldAndBought(false);
    setBoardsOfMine(false);
    setProductIPicked(false);
  };
  const onClickSoldAndBought = () => {
    setPaymentList(false);
    setSoldAndBought(true);
    setBoardsOfMine(false);
    setProductIPicked(false);
  };
  const onClickBoardsOfMine = () => {
    setBoardsOfMine(true);
    setPaymentList(false);
    setSoldAndBought(false);
    setProductIPicked(false);
  };
  const onClickProductIPicked = () => {
    setProductIPicked(true);
    setSoldAndBought(false);
    setBoardsOfMine(false);
    setPaymentList(false);
  };

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="SoldAndBought" onClick={onClickSoldAndBought}>
          구매/판매 내역
        </Menu.Item>

        <Menu.Item key="Point" onClick={onClickPaymentList}>
          포인트 사용 내역
        </Menu.Item>
        <Menu.Item key="Boards" onClick={onClickBoardsOfMine}>
          내가 쓴 게시글
        </Menu.Item>
        <Menu.Item key="Picked" onClick={onClickProductIPicked}>
          장바구니
        </Menu.Item>
      </Menu>

      {paymentList && <PaymentListPage />}
      {soldAndBought && <MyPage />}
      {boardsOfMine && <FreeBoardsOfMinePage />}
      {productIPicked && <ProductIPickedPage />}
    </div>
  );
}
