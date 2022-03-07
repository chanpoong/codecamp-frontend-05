import { useContext, useEffect } from "react";

import { GlobalContext } from "../../../../../pages/_app";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { getMyDate2, getPrice } from "../../../commons/libraries/utils";

const Wrapper = styled.div`
  z-index: 2;
  width: 140px;
  padding: 20px 15px;
  position: fixed;
  right: 30px;
  /* left: 100vw; */
  top: 50%;
  transform: translate(0, -50%);
  overflow: hidden;
  background: white;
  border-radius: 20px;
  border: gold 1px solid;
  p {
    font-weight: 700;
  }
`;
const Items = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5px;
  div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 5px 0;
  }
  :hover {
    cursor: pointer;
  }
`;

export default function LookedProductPage() {
  const router = useRouter();
  const { item, setItem } = useContext(GlobalContext);
  const todayDate = getMyDate2(new Date());

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem(todayDate) || "[]");
    if (baskets) {
      setItem(baskets);
    }
  }, []);

  const onClickDetail = (el) => () => {
    router.push(`/products/${el._id}`);
  };

  return (
    <Wrapper>
      <p>오늘 본 상품</p>
      {item
        .map((el, index) => (
          <Items key={el._id} index={index} onClick={onClickDetail(el)}>
            <div style={{ width: "45px", height: "45px", overflow: "hidden" }}>
              <img
                style={{ height: "100%" }}
                src={`https://storage.googleapis.com/${el.images[0]}`}
                onError={(e) => {
                  e.currentTarget.src = "/img/commonImg/nolza.jpeg";
                }}
              />
            </div>
            <div>
              <div>{el.name}</div>
              <div>{getPrice(el.price)}</div>
            </div>
          </Items>
        ))
        .filter((_, index) => index < 5)}
    </Wrapper>
  );
}
