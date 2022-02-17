import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 317px;
  left: 360px;
  bottom: 350px;

  padding: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const WrapperTitle = styled.span`
  font-weight: bold;
  font-size: 36px;
  padding-bottom: 10px;
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: 95%;

  display: flex;
  flex-direction: column;

  /* height: 3805px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  width: 100%;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;

  color: #000000;
  border-bottom: 1px solid gray;
`;

export const Title = styled.span`
  margin: 10px;
  text-align: start;
  min-width: 100px;
`;
export const TitleData = styled.span`
  width: 80%;
  min-width: 600px;

  padding: 10px;
`;
export const ProductInfoWrapper = styled.div`
  width: 100%;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;

  color: #000000;
  border-bottom: 1px solid gray;

  display: flex;
  flex-direction: row;
`;
export const Seller = styled.span`
  margin: 10px 5px 10px 10px;
  text-align: start;
  min-width: 50px;
`;
export const SellerData = styled.span`
  width: 80%;
  padding: 10px 10px 10px 0px;
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  color: #000000;
  border-bottom: 1px solid gray;
`;
export const ContentsTitle = styled.span`
  text-align: start;
  min-width: 50px;
  padding: 10px 10px 0px 10px;
  font-weight: bold;
`;
export const ContentsData = styled.span`
  width: 100%;
  height: 500px;

  padding: 5px 10px 10px 10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
