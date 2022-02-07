import { Popover, Button } from "antd";
import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";
import * as JH from "./infocomponent/info.styles";

export default function InfoPage() {
  const [characterName, setCharacterName] = useState("");
  const [itemIndexNumber, setItemIndexNumber] = useState(0);
  const [result, setResult] = useState();
  const [itemInfoVisible, setItemInfoVisible] = useState({ ...false });

  const openItemInfo = (event) => {
    setItemIndexNumber(event.target.id);
    setItemInfoVisible({
      ...itemInfoVisible,
    });
  };

  const inputNickname = (event) => {
    setCharacterName(event.target.value);
  };

  const onClickSearch = () => {
    fetchInfo();
  };

  const fetchInfo = async () => {
    const data = await axios.get(
      `http://apis.iptime.org/LostArk/Character/Character-Item?NickName=${characterName}`
    );
    setResult(Object.values(data?.data?.Items));
  };

  const deleteFunction = (match) => {
    let str = match;
    if (str) {
      str = str.replace(/"|{|}|,/gi, " ");
    }
    return str;
  };

  const trifordFunction = (match) => {
    let trifordStr = match;
    if (trifordStr) {
      trifordStr = trifordStr.replace(/"|{|}|,|Level|Name|:|0|1|2/gi, " ");
    }
    return trifordStr;
  };
  const setOptionFunction = (match) => {
    let setOptionStr = match;
    if (setOptionStr) {
      setOptionStr = setOptionStr.replace(/"|{|}|,|Level|Name|:|Value/gi, " ");
    }
    return setOptionStr;
  };

  const setOptionBraceletFunction = (match) => {
    if (match) {
      let optionArray = Object.entries(match);
      let arrayResult = optionArray.filter((el) => {
        if (!el[0].includes("Oth")) return el;
      });
    }

    return arrayResult;
  };
  console.log(result);

  return (
    <JH.InfoPageWrapper>
      <span>검색에는 시간이 소요될 수 있습니다.</span> <br />
      검색할 캐릭터 명: <input onChange={inputNickname} />
      <button onClick={onClickSearch}>검색</button>
      <JH.InfoDataWrapper>
        {result?.map((el, index) => (
          <JH.InfoDataWrapper key={index}>
            <JH.ItemInfo
              title={
                <div>
                  {el.Upgrade === "0"
                    ? `${el.Name}`
                    : `${el.Upgrade} ${el.Name}`}
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
                            setOptionBraceletFunction(
                              el?.Option["Bracelet Option"]
                            )[0]
                          }
                        </div>
                        <div>
                          {
                            setOptionBraceletFunction(
                              el?.Option["Bracelet Option"]
                            )[1]
                          }
                        </div>
                        <div>
                          {
                            setOptionBraceletFunction(
                              el?.Option["Bracelet Option"]
                            )[2]
                          }
                        </div>
                        <div>
                          {
                            setOptionBraceletFunction(
                              el?.Option["Bracelet Option"]
                            )[3]
                          }
                        </div>
                      </JH.BraceletOptionWrapper>
                    ) : (
                      <JH.InfoEquipmentBasic>
                        <div>기본효과</div>
                        {deleteFunction(
                          JSON.stringify(
                            el?.Option?.Basic ? el?.Option?.Basic : ""
                          )
                        )}
                      </JH.InfoEquipmentBasic>
                    )}

                    {el?.Option.Plus ? (
                      <JH.InfoEquipmentPlus>
                        <div>추가 효과:</div>

                        {deleteFunction(
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
                          {trifordFunction(
                            JSON.stringify(
                              el?.Option.Triford ? el?.Option.Triford[0] : ""
                            )
                          )}
                        </JH.Triford>
                        <JH.Triford>
                          {trifordFunction(
                            JSON.stringify(
                              el?.Option.Triford ? el?.Option.Triford[1] : ""
                            )
                          )}
                        </JH.Triford>
                        <JH.Triford>
                          {trifordFunction(
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

                        {setOptionFunction(JSON.stringify(el?.Set, ["Name"]))}
                      </JH.SetOptionTitle>

                      <JH.SetOptionDetail>
                        {el?.Set
                          ? setOptionFunction(
                              JSON.stringify(
                                el?.Set["Set Effects"]["2 세트 효과"]
                              )
                            )
                          : ""}
                      </JH.SetOptionDetail>
                      <JH.SetOptionDetail>
                        {el?.Set
                          ? setOptionFunction(
                              JSON.stringify(
                                el?.Set["Set Effects"]["4 세트 효과"]
                              )
                            )
                          : ""}
                      </JH.SetOptionDetail>
                      <JH.SetOptionDetail>
                        {el?.Set
                          ? setOptionFunction(
                              JSON.stringify(
                                el?.Set["Set Effects"]["6 세트 효과"]
                              )
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
                        {setOptionFunction(
                          JSON.stringify(
                            el?.Option["Engraving Effects"]
                              ? el?.Option["Engraving Effects"][0]
                              : ""
                          )
                        )}
                      </div>
                      <div>
                        {setOptionFunction(
                          JSON.stringify(
                            el?.Option["Engraving Effects"]
                              ? el?.Option["Engraving Effects"][1]
                              : ""
                          )
                        )}
                      </div>
                      <div>
                        {setOptionFunction(
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
                        {deleteFunction(
                          JSON.stringify(
                            el?.Option["Bracelet Option"]
                              ? el?.Option["Bracelet Option"]["Other"][0]
                              : ""
                          )
                        )}
                      </JH.BraceletOptionDetail>
                      <JH.BraceletOptionDetail>
                        {deleteFunction(
                          JSON.stringify(
                            el?.Option["Bracelet Option"]
                              ? el?.Option["Bracelet Option"]["Other"][1]
                              : ""
                          )
                        )}
                      </JH.BraceletOptionDetail>
                      <JH.BraceletOptionDetail>
                        {deleteFunction(
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
              <button id={index} onClick={openItemInfo}>
                <JH.ItemIcon src={el.Icon} />
                {el.Upgrade === "0" ? `${el.Name}` : `${el.Upgrade} ${el.Name}`}
              </button>
            </JH.ItemInfo>
          </JH.InfoDataWrapper>
        ))}
      </JH.InfoDataWrapper>
      <JH.TestDiv></JH.TestDiv>
    </JH.InfoPageWrapper>
  );
}
