import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`;
// 구매 완료한 상품에 대한 쿼리
export const FETCH_USED_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($page: Int) {
    fetchUseditemsIBought(page: $page) {
      _id
      name
      contents
      price
      seller {
        name
      }
      soldAt
    }
  }
`;

//판매중인 상품에 대한 쿼리
export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      contents
      price
      soldAt
      buyer {
        name
      }
    }
  }
`;

//판매 완료된 아이템
export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
//판매 완료된 아이템 ?
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;
