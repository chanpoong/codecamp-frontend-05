import * as JH from "./signup.styles";

export default function SignupPageUI(props) {
  return (
    <JH.Wrapper>
      <JH.InputBox>
        <JH.SignupTitle> 회원 가입 정보</JH.SignupTitle>
        <JH.InputUserInfo
          type="text"
          placeholder="Email"
          onChange={props.onChangeCreateUserId}
        />
        <JH.InputUserInfo type="text" placeholder="Check Email" />
        <JH.InputUserInfo
          type="password"
          placeholder="Password"
          onChange={props.onChangeCreateUserPassword}
        />
        <JH.InputUserInfo type="password" placeholder="Check Password" />
        <JH.InputUserInfo
          type="text"
          placeholder="Nickname"
          onChange={props.onChangeCreateUserName}
        />
        <JH.SubmitSignup onClick={props.onClickSignup}>Done</JH.SubmitSignup>
      </JH.InputBox>
    </JH.Wrapper>
  );
}
