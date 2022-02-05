import { Popover, Button } from "antd";
import axios from "axios";
import { useState } from "react";

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
  //   console.log(result[0].Option.Basic["마법 방어력"]);
  //   console.log(itemOption);
  //   console.log(itemIndexNumber);
  //   console.log(result["6"].Option.Basic);
  //   console.log(result["6"].Option.Plus);
  //   console.log(result["6"].Option.Triford);
  //   console.log(result["6"].Option["Engraving Effects"]);
  console.log(result);

  return (
    <>
      <span>검색에는 시간이 소요될 수 있습니다.</span> <br />
      검색할 캐릭터 명: <input onChange={inputNickname} />
      <button onClick={onClickSearch}>검색</button>
      {result?.map((el, index) => (
        <div key={index}>
          <Popover
            title={`${el.Upgrade}  ${el.Name}`}
            content={
              <div>
                <div>
                  품질: {el.Quality} <br />
                </div>
                <div>
                  기본 효과:
                  {JSON.stringify(el?.Option.Basic)}
                  <br />
                  추가 효과:
                  {JSON.stringify(el?.Option.Plus)}
                  <br />
                  트라이포드
                  <br />
                  {JSON.stringify(el?.Option.Triford, ["0", "Name", "Level"])}
                  <br />
                  {JSON.stringify(el?.Option.Triford, ["1", "Name", "Level"])}
                  <br />
                  {JSON.stringify(el?.Option.Triford, ["2", "Name", "Level"])}
                </div>
                <br />
                <div>
                  세트 옵션: <br />
                  {JSON.stringify(el?.Set, ["Name"])}
                  <br />
                  {JSON.stringify(el?.Set, ["Level"])}
                  <br />
                  {JSON.stringify(el?.Set, [
                    "Set Effects",
                    "2 세트 효과",
                    "4 세트 효과",
                    "6 세트 효과",
                  ])}
                  <br />
                  {JSON.stringify(el?.Set, ["Set Enabled"])}
                  <br />
                </div>
              </div>
            }
            trigger="click"
          >
            <button id={index} onClick={openItemInfo}>
              <img src={el.Icon} />
              {el.Upgrade}
              {el.Name}
            </button>
          </Popover>
        </div>
      ))}
    </>
  );
}
