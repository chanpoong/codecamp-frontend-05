import { useState } from "react";
import styled from "@emotion/styled";

const Pagination__Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 80px;
`;

const NextPage = styled.span`
  padding-right: 20px;
  padding-left: 10px;

  font-size: 1rem;
  border-left: 1px silver solid;

  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-radius: 8px 20px 20px 8px;
    font-weight: bold;
  }
`;
const PrevPage = styled.span`
  padding-left: 20px;
  padding-right: 10px;
  font-size: 1rem;
  border-right: 1px silver solid;

  width: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: gold;
    border-radius: 20px 8px 8px 20px;
  }
`;

const PageIndex = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) =>
    props.changeIndexColor === props.index + props.startPage
      ? "gold"
      : "black"};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding-left: 5px;
  padding-right: 5px;
`;

export default function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [changeIndexColor, setChangeIndexColor] = useState(1);

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setChangeIndexColor(Number(event.target.id));
  };

  const onClickPrevPage = (event) => {
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
              key={index + props.startPage}
              onClick={onClickPage}
              id={String(index + props.startPage)}
              changeIndexColor={changeIndexColor}
              index={index}
              startPage={props.startPage}
            >
              {`  ${index + props.startPage}  `}
            </PageIndex>
          )
      )}

      <NextPage onClick={onClickNextPage}> 다음페이지 </NextPage>
    </Pagination__Wrapper>
  );
}
