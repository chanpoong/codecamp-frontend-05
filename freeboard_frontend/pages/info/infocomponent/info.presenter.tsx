import InfoSearchItemPage from "./info.searchitem";
import * as JH from "./info.styles";
import { IInfoPresenterPageProps } from "./info.types";

export default function InfoPresenterPage(props: IInfoPresenterPageProps) {
  const InfoIndexNum = props.itemIndexNumber;
  return (
    <JH.InfoPageWrapper>
      <JH.InfoTitleWrapper>
        검색할 캐릭터 명:{" "}
        <input onChange={props.inputNickname} placeholder="Search" />
        <button onClick={props.onClickSearch}>검색</button>
      </JH.InfoTitleWrapper>
      <span>검색에는 시간이 소요될 수 있습니다.</span>
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
    </JH.InfoPageWrapper>
  );
}
