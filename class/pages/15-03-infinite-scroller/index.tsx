import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 700px;
`;

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const onLoadMore = () => {
    if (!data) return; // 불러올 데이터가 없으면 실행하지 않게

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      // Math.ceil(data.fetchBoards.length / 10)가 현재 페이지를 나타냄
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        } // 더 불러올 데이터가 없으면 이전 데이터만 보여주기
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        }; // 이전 글, 다음글 합쳐서 리턴
      },
    });
  };

  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
        // loader={<div className="loader" key={0}>Loading ...</div>}
      >
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            <div>
              <span>
                {el.title} {el.writer}
              </span>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
}
