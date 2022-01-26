import styled from "@emotion/styled";

export const Board = styled.div`
  width: 1200px;
  height: auto;
  top: 317px;
  left: 360px;
  /* bottom: 350px; */

  padding: 50px;
  margin-top: 100px;
  margin-left: 100px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const MyTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;

  /* Black */

  color: #000000;
`;

export const MySubTitle = styled.div`
  width: 100%;

  margin-top: 15px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;

export const TextBox1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 30px 15px 30px;
`;

export const InputBox = styled.input`
  width: 510px;
  height: 52px;
  left: 971px;
  top: 1002px;

  margin-right: 15px;

  padding-left: 15px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 4 */

  color: #000000;
`;
export const Text = styled.div`
  width: 100%;

  margin-top: 15px;
  margin-bottom: 10px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;

export const TextBox2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 15px 30px 15px 30px;
`;

export const InputTitle = styled.input`
  width: 100%;
  height: 52px;
  left: 971px;
  top: 1002px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 4 */

  color: #000000;
  padding-left: 15px;
`;

export const InputOne = styled.textarea`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  padding-left: 15px;
  padding-top: 15px;

  /* .display-enter { white-space: pre-line; } */

  /* Gray 4 */

  color: #000000;
`;

export const InputAddress = styled.input`
  width: 100%;
  height: 52px;

  margin-top: 15px;
  margin-bottom: 15px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
  padding-left: 15px;
`;
export const GetUserAddress = styled.input`
  width: 100%;
  height: 52px;

  margin-top: 15px;
  margin-bottom: 15px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
  padding-left: 15px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const InputMailAddress = styled.input`
  width: 77px;
  height: 50px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;

  margin-right: 10px;
  padding-left: 15px;
  font-size: 16px;
`;

export const FindMailAddress = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 5px 10px 5px;
  cursor: pointer;

  border: none;
  border-radius: 8px;
  width: 50px;
  height: 51px;

  /* Black */

  background-color: silver;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  /* identical to box height */

  /* font White */

  /* color: red; */
`;

export const PartOfAddress = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputYoutube = styled.input`
  width: 100%;
  height: 52px;

  margin-bottom: 15px;

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  background: #ffffff;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 4 */

  color: #000000;
  padding-left: 15px;
`;

export const PictureBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 15px 30px 15px 30px;
`;

export const InputPic = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Picture = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px black solid;
  margin-right: 10px;
  cursor: pointer;
`;
export const Picture1 = styled.div`
  font-size: 15px;
  color: #000000;
`;
export const Picture2 = styled.button`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  background: none;
  border: none;
  cursor: pointer;

  color: #4f4f4f;
`;

export const WrapperChoose = styled.div`
  width: 200px;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 15px;
`;

export const ChooseMain = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ChooseButton = styled.input`
  cursor: pointer;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-right: 8px;
`;
export const ChooseButtonText = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

export const Signup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignupButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 60px;
  border: none;
  cursor: pointer;

  background-color: ${(props) =>
    props.changeBtnColor === true ? "yellow" : "none"};

  margin-top: 50px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
`;

export const CansleButton = styled.button`
  padding: 14px 60px;
  border: 1px solid grey;
  cursor: pointer;

  background: #ffffff;

  margin-top: 50px;
  margin-left: 30px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

export const ErrorMassages = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: red;

  padding-left: 15px;
`;
