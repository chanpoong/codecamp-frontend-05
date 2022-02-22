import { useState } from "react";
import styled from "@emotion/styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";

const Pagination__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const NextPage = styled(AiOutlineArrowRight)`
  padding-right: 20px;
  padding-left: 10px;
  font-size: 1.3rem;
  border-left: 1px silver solid;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: gold;
    font-weight: bold;
    color: white;
    border-radius: 8px 20px 20px 8px;
    font-weight: bold;
  }
`;
const PrevPage = styled(AiOutlineArrowLeft)`
  padding-left: 20px;
  padding-right: 10px;
  font-size: 1.3rem;
  border-right: 1px silver solid;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: gold;
    font-weight: bold;
    color: white;
    border-radius: 20px 8px 8px 20px;
  }
`;

const PageIndex = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props: any) =>
    props.changeIndexColor === props.index + props.startPage
      ? "gold"
      : "black"};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  :hover {
    background-color: gold;
    border-radius: 3px;
    font-weight: bold;
    color: white;
  }
`;

export default function Pagination(props) {
  const [changeIndexColor, setChangeIndexColor] = useState(1);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      props.refetch({ search: props.keyword, page: Number(event.target.id) });
    setChangeIndexColor(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (props.startPage <= 1) return;
    props.setStartPage((prev) => prev - 10);
    props.refetch({ page: props.startPage - 10 });
    setChangeIndexColor(props.startPage - 10);
  };

  const onClickNextPage = () => {
    if (props.startPage + 10 > props.lastPage) return;
    props.setStartPage((prev) => prev + 10);
    props.refetch({ page: props.startPage + 10 });
    setChangeIndexColor(props.startPage + 10);
  };

  return (
    <Pagination__Wrapper>
      <PrevPage onClick={onClickPrevPage}>이전페이지</PrevPage>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <PageIndex
              key={uuidv4()}
              onClick={onClickPage}
              id={String(index + props.startPage)}
              changeIndexColor={changeIndexColor}
              index={index}
              startPage={props.startPage}
              search={props.search}
            >
              {`  ${index + props.startPage}  `}
            </PageIndex>
          )
      )}

      <NextPage onClick={onClickNextPage}> </NextPage>
    </Pagination__Wrapper>
  );
}
