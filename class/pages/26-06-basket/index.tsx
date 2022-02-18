import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
interface IBoard {
  writer?: string;
  title?: string;
  _id?: string;
  __typename?: string;
}
export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const onClickTobasket = () => {
    router.push("/26-07-basket-logged-in");
  };

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 장바구니에 담겨있습니다");
      return;
    }

    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };
  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span> <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
      <button onClick={onClickTobasket}>장바구니 가기</button>
    </div>
  );
}
