import React from "react";
import * as S from "./style";

const SignUpTemplate = () => {
  return (
    <S.styledDiv>
      <S.LoginBox>
        <S.defaultLink to="/">
          <h1>SURVEY</h1>
        </S.defaultLink>
        <S.inputArea>
          <S.styledInput placeholder="아이디를 입력해주세요" />
          <S.styledInput placeholder="비밀번호를 입력해주세요" />
          <S.styledInput placeholder="비밀번호를 다시 입력해주세요" />
        </S.inputArea>
        <S.styledButton2>회원가입</S.styledButton2>
      </S.LoginBox>
    </S.styledDiv>
  );
};

export default SignUpTemplate;
