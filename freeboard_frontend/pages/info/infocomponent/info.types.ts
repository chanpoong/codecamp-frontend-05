import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IInfoPresenterPageProps {
  result?: any;
  itemIndexNumber: number;
  deleteFunction: string;
  trifordFunction: string;
  setOptionFunction: string;
  setOptionBraceletFunction: object;
  inputNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
  openItemInfo: () => void;
}
