import LoadingPage from "../../../commons/loading";
import * as JH from "./info.styles";

export default function InfoSearchItemPage(props) {
  const el = props.el;
  return (
    <JH.ItemInfo
      title={
        <div>
          {props.el.Upgrade === "0" ? `${el.Name}` : `${el.Upgrade} ${el.Name}`}
        </div>
      }
      content={
        <JH.ItemInfoWrapper>
          <JH.InfoQuality>
            {el.Quality === -1 ? "" : `품질: ${el.Quality}`}
          </JH.InfoQuality>
          <div>
            {el?.Option["Bracelet Option"] ? (
              <JH.BraceletOptionWrapper>
                기본효과:
                <div>
                  {
                    props.setOptionBraceletFunction(
                      el?.Option["Bracelet Option"]
                    )[0]
                  }
                </div>
                <div>
                  {
                    props.setOptionBraceletFunction(
                      el?.Option["Bracelet Option"]
                    )[1]
                  }
                </div>
                <div>
                  {
                    props.setOptionBraceletFunction(
                      el?.Option["Bracelet Option"]
                    )[2]
                  }
                </div>
                <div>
                  {
                    props.setOptionBraceletFunction(
                      el?.Option["Bracelet Option"]
                    )[3]
                  }
                </div>
              </JH.BraceletOptionWrapper>
            ) : (
              <JH.InfoEquipmentBasic>
                <div>기본효과</div>
                {props.deleteFunction(
                  JSON.stringify(el?.Option?.Basic ? el?.Option?.Basic : "")
                )}
              </JH.InfoEquipmentBasic>
            )}

            {el?.Option.Plus ? (
              <JH.InfoEquipmentPlus>
                <div>추가 효과:</div>

                {props.deleteFunction(
                  JSON.stringify(el?.Option.Plus ? el?.Option.Plus : "")
                )}
              </JH.InfoEquipmentPlus>
            ) : (
              ""
            )}

            {el?.Option.Triford ? (
              <JH.TrifordWrapper>
                트라이포드
                <JH.Triford>
                  {props.trifordFunction(
                    JSON.stringify(
                      el?.Option.Triford ? el?.Option.Triford[0] : ""
                    )
                  )}
                </JH.Triford>
                <JH.Triford>
                  {props.trifordFunction(
                    JSON.stringify(
                      el?.Option.Triford ? el?.Option.Triford[1] : ""
                    )
                  )}
                </JH.Triford>
                <JH.Triford>
                  {props.trifordFunction(
                    JSON.stringify(
                      el?.Option.Triford ? el?.Option.Triford[2] : ""
                    )
                  )}
                </JH.Triford>
              </JH.TrifordWrapper>
            ) : (
              ""
            )}
          </div>

          {el?.Set ? (
            <JH.SetOptionWrapper>
              <JH.SetOptionTitle>
                <div>세트 옵션:</div>

                {props.setOptionFunction(JSON.stringify(el?.Set, ["Name"]))}
              </JH.SetOptionTitle>

              <JH.SetOptionDetail>
                {el?.Set
                  ? props.setOptionFunction(
                      JSON.stringify(el?.Set["Set Effects"]["2 세트 효과"])
                    )
                  : ""}
              </JH.SetOptionDetail>
              <JH.SetOptionDetail>
                {el?.Set
                  ? props.setOptionFunction(
                      JSON.stringify(el?.Set["Set Effects"]["4 세트 효과"])
                    )
                  : ""}
              </JH.SetOptionDetail>
              <JH.SetOptionDetail>
                {el?.Set
                  ? props.setOptionFunction(
                      JSON.stringify(el?.Set["Set Effects"]["6 세트 효과"])
                    )
                  : ""}
              </JH.SetOptionDetail>
            </JH.SetOptionWrapper>
          ) : (
            ""
          )}
          {el?.Option["Engraving Effects"] ? (
            <JH.AccOptionWrapper>
              <div>각인 효과</div>

              <div>
                {props.setOptionFunction(
                  JSON.stringify(
                    el?.Option["Engraving Effects"]
                      ? el?.Option["Engraving Effects"][0]
                      : ""
                  )
                )}
              </div>
              <div>
                {props.setOptionFunction(
                  JSON.stringify(
                    el?.Option["Engraving Effects"]
                      ? el?.Option["Engraving Effects"][1]
                      : ""
                  )
                )}
              </div>
              <div>
                {props.setOptionFunction(
                  JSON.stringify(
                    el?.Option["Engraving Effects"]
                      ? el?.Option["Engraving Effects"][2]
                      : ""
                  )
                )}
              </div>
            </JH.AccOptionWrapper>
          ) : (
            ""
          )}
          {el?.Option["Bracelet Option"] ? (
            <JH.BraceletOptionWrapper>
              <JH.BraceletOptionDetail>
                <div>추가 효과:</div>
                {props.deleteFunction(
                  JSON.stringify(
                    el?.Option["Bracelet Option"]
                      ? el?.Option["Bracelet Option"]["Other"][0]
                      : ""
                  )
                )}
              </JH.BraceletOptionDetail>
              <JH.BraceletOptionDetail>
                {props.deleteFunction(
                  JSON.stringify(
                    el?.Option["Bracelet Option"]
                      ? el?.Option["Bracelet Option"]["Other"][1]
                      : ""
                  )
                )}
              </JH.BraceletOptionDetail>
              <JH.BraceletOptionDetail>
                {props.deleteFunction(
                  JSON.stringify(
                    el?.Option["Bracelet Option"]
                      ? el?.Option["Bracelet Option"]["Other"][2]
                      : ""
                  )
                )}
              </JH.BraceletOptionDetail>
            </JH.BraceletOptionWrapper>
          ) : (
            ""
          )}
        </JH.ItemInfoWrapper>
      }
      trigger="click"
    >
      <JH.ItemBtn id={props.index} onClick={props.openItemInfo}>
        <JH.ItemIcon src={el.Icon} />

        <JH.ItemBtnTitle>
          <div>{el.Parts}</div>
          {props.el.Upgrade === "0" ? `` : `${el.Upgrade}`}
          {el.Name}
        </JH.ItemBtnTitle>
      </JH.ItemBtn>
    </JH.ItemInfo>
  );
}
