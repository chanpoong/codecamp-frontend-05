import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 1200px;
  background-color: black;
`;
export const InputBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: auto;
  background: white;
  opacity: 0.85;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  box-shadow: 8px 8px #d4af37;
`;

export const SignupTitle = styled.h2`
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;

export const InputUserInfo = styled.input`
  width: 80%;

  padding: 5px;
  margin: 10px;
  border-top: none;
  border-left: none;
  border-right: none;

  :focus {
    background-color: gold;
  }
`;
export const SubmitSignup = styled.button`
  text-align: end;

  margin: 10px 5px;
  padding: 2px 10px;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #d4af37;
  }
`;
