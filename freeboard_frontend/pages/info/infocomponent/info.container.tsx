import axios from "axios";
import { useState } from "react";
import InfoPresenterPage from "./info.presenter";

export default function InfoContainerPage() {
  const [characterName, setCharacterName] = useState("");
  const [itemIndexNumber, setItemIndexNumber] = useState(0);
  const [result, setResult] = useState();
  const [itemInfoVisible, setItemInfoVisible] = useState(false);

  const openItemInfo = (event) => {
    setItemIndexNumber(event.target.id);
    setItemInfoVisible(itemInfoVisible);
  };

  const inputNickname = (event) => {
    setCharacterName(event.target.value);
  };

  const onClickSearch = () => {
    fetchInfo();
  };

  const fetchInfo = async () => {
    const data: any = await axios.get(
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

  const trifordFunction = (match: string) => {
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

  const setOptionBraceletFunction = (match: string) => {
    if (match) {
      let optionArray = Object.entries(match);
      let arrayResult = optionArray.filter((el) => {
        if (!el[0].includes("Oth")) return el;
      });
      return arrayResult;
    }
  };
  console.log(result);
  return (
    <InfoPresenterPage
      result={result}
      itemIndexNumber={itemIndexNumber}
      openItemInfo={openItemInfo}
      inputNickname={inputNickname}
      onClickSearch={onClickSearch}
      deleteFunction={deleteFunction}
      trifordFunction={trifordFunction}
      setOptionFunction={setOptionFunction}
      setOptionBraceletFunction={setOptionBraceletFunction}
    />
  );
}
