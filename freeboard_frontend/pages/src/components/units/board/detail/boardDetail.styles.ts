import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1200px;
  height: auto;
  top: 317px;
  left: 360px;
  /* bottom: 350px; */

  padding: 50px;
  margin-top: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 3805px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

// WrapperHeader part
export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperHeader__Top = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 200px;

  margin-top: 50px;
  background-color: red;
`;
export const Top__LogoImg = styled.div`
  width: 300px;
  height: 70px;

  font-size: 20px;
  font-weight: bold;

  background-color: white;
`;
export const Top_Button = styled.div`
  width: 400px;
`;
export const LoginBtn = styled.button`
  width: 92px;
  height: 44px;
  border: none;
  cursor: pointer;
  background-color: white;
`;
export const SignupBtn = styled.button`
  width: 92px;
  height: 44px;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
`;

export const WrapperHeader__pannel = styled.div`
  width: 100%;
  height: 400px;
  background-color: skyblue;

  font-weight: bold;
  font-size: 50px;
  color: black;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
/* export const WrapperHeader__bottom = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;
  color: black;

  margin-bottom: 20px;

  background-color: yellow;
`;
 */
// WrapperBody part
export const WrapperBody = styled.div`
  width: 100%;
`;

export const WrapperBody__contents = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContentsHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px grey solid;

  padding: 30px 50px 30px 50px;
`;

export const ContentsNum = styled.div`
  width: 200px;
  height: 70px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const ContentsTitle = styled.div`
  width: 200px;
  height: 70px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const ContentsWriter = styled.div`
  width: 200px;
  height: 70px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const ContentsPopoverBtn = styled.div`
  width: 120px;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const ContentsText = styled.div`
  width: 100%;
  /* height: 700px; */

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  padding: 30px 50px 30px 50px;

  white-space: pre-line;
`;

export const ContentsBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 30px;
`;
export const YoutubePlayer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const WrapperBody__menu = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
`;
export const ToListBtn = styled.button`
  width: 150px;
  height: 40px;

  margin-right: 15px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;

  transition-duration: 0.05s;
  box-shadow: 3px 3px 3px black;

  :active {
    margin-left: 1px;
    margin-top: 1px;
    box-shadow: none;
  }

  padding-top: 5px;
`;
export const RewriteBtn = styled.button`
  width: 150px;
  height: 40px;

  margin-right: 15px;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;

  transition-duration: 0.05s;
  box-shadow: 3px 3px 3px black;

  :active {
    margin-left: 1px;
    margin-top: 1px;
    box-shadow: none;
  }

  padding-top: 5px;
`;
export const DeleteBtn = styled.button`
  width: 150px;
  height: 40px;

  background-color: white;
  cursor: pointer;
  border-radius: 10px;

  transition-duration: 0.05s;
  box-shadow: 3px 3px 3px black;

  :active {
    margin-left: 1px;
    margin-top: 1px;
    box-shadow: none;
  }

  padding-top: 5px;
`;

// WrapperFooter part

export const BoardLikeCountWrapper = styled.div`
  width: 200px;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-bottom: 15px;
`;
export const LikeBtnPart = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px grey solid;
  background-color: white;

  margin-right: 20px;
  cursor: pointer;
  width: 5rem;
  height: 3rem;

  transition-duration: 0.05s;
  box-shadow: 3px 3px 3px black;

  :active {
    margin-left: 1px;
    margin-top: 1px;
    box-shadow: none;
  }

  padding-top: 5px;
`;
export const LikeBtn = styled(LikeOutlined)`
  color: blue;
  cursor: pointer;
`;
export const LikeCount = styled.div``;

export const DisLikeBtnPart = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px grey solid;
  background-color: white;

  margin-right: 20px;
  cursor: pointer;
  width: 5rem;
  height: 3rem;

  transition-duration: 0.05s;
  box-shadow: 3px 3px 3px black;

  :active {
    margin-left: 1px;
    margin-top: 1px;
    box-shadow: none;
  }

  padding-top: 5px;
`;

export const DisLikeBtn = styled(DislikeOutlined)`
  color: red;
  cursor: pointer;
`;
export const DisLikeCount = styled.label``;

export const DetailImages = styled.img`
  width: 100%;
  height: 100%;

  max-height: 200px;
  max-width: 200px;
`;
