import { useEffect } from "react";
import LoadingPage from "../../../commons/loading/index";
import InfoSearchItemPage from "./info.searchitem";
import * as JH from "./info.styles";
import { IInfoPresenterPageProps } from "./info.types";

export default function InfoPresenterPage(props: IInfoPresenterPageProps) {
  // useEffect(() => {
  //   if (props.result) return;
  //   else return LoadingPage;
  // }, []);

  return (
    <JH.InfoPageWrapper>
      <JH.InfoTitleWrapper>
        <JH.NicknameTitle>검색할 캐릭터 명:</JH.NicknameTitle>
        <JH.InputNickname onChange={props.inputNickname} placeholder="Search" />
        <button onClick={props.onClickSearch}>검색</button>
      </JH.InfoTitleWrapper>
      {!props.result && props.isLoading ? <LoadingPage /> : ""}
      {props.result && (
        <JH.InfoDataDivideWrapper>
          <JH.InfoDataWrapperLeft>
            {props.result
              ?.map((el, index) => (
                <JH.InfoDataWrapper key={index}>
                  <InfoSearchItemPage
                    el={el}
                    index={index}
                    result={props.result}
                    itemIndexNumber={props.itemIndexNumber}
                    openItemInfo={props.openItemInfo}
                    inputNickname={props.inputNickname}
                    onClickSearch={props.onClickSearch}
                    deleteFunction={props.deleteFunction}
                    trifordFunction={props.trifordFunction}
                    setOptionFunction={props.setOptionFunction}
                    setOptionBraceletFunction={props.setOptionBraceletFunction}
                  />
                </JH.InfoDataWrapper>
              ))
              .filter((el, InfoIndexNum) => {
                if (InfoIndexNum <= 5) return el;
              })}
          </JH.InfoDataWrapperLeft>
          <JH.InfoDataWrapperRight>
            {props.result
              ?.map((el, index) => (
                <JH.InfoDataWrapper key={index}>
                  <InfoSearchItemPage
                    el={el}
                    index={index}
                    result={props.result}
                    itemIndexNumber={props.itemIndexNumber}
                    openItemInfo={props.openItemInfo}
                    inputNickname={props.inputNickname}
                    onClickSearch={props.onClickSearch}
                    deleteFunction={props.deleteFunction}
                    trifordFunction={props.trifordFunction}
                    setOptionFunction={props.setOptionFunction}
                    setOptionBraceletFunction={props.setOptionBraceletFunction}
                  />
                </JH.InfoDataWrapper>
              ))
              .filter((el, InfoIndexNum) => {
                if (InfoIndexNum > 5) return el;
              })}
          </JH.InfoDataWrapperRight>
        </JH.InfoDataDivideWrapper>
      )}
    </JH.InfoPageWrapper>
  );
}
