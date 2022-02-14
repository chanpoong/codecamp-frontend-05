import * as JH from "./loginComponent.styles";

export default function LoginComponentPageUI(props) {
  return (
    <>
      <JH.Wrapper>
        <JH.HomeImgVideo muted autoPlay loop>
          <source src="/img/login/ninabLogin.mp4" type="video/mp4" />
        </JH.HomeImgVideo>

        <JH.MenuChoose>
          <JH.MenuTitle>login Info</JH.MenuTitle>
          <JH.MenuButtonWrapper>
            <JH.MenuButtonLine
              type="text"
              onChange={props.onChangeUserId}
              placeholder="ID"
            />
            
            <JH.MenuButtonLine
              type="password"
              onChange={props.onChangeUserPassword}
              placeholder="Password"
            />
          </JH.MenuButtonWrapper>
          <JH.MenuFooter>
            <JH.SelectButton onClick={props.onClickLogin}>
              {" "}
              login{" "}
            </JH.SelectButton>
          </JH.MenuFooter>
        </JH.MenuChoose>
      </JH.Wrapper>
    </>
  );
}
