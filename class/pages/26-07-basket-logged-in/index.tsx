import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);

  // if(typeof window !== "undefined")
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      <h1>비회원 장바구니</h1>
      {basketItems?.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
