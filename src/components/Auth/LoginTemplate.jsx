import React from "react";
import * as S from "./style";

const LoginTemplate = () => {
  return (
    <S.styledDiv>
      <S.LoginBox>
        <S.defaultLink to="/">
          <h1>SURVEY</h1>/
        </S.defaultLink>
        <S.inputArea>
          <S.styledInput placeholder="아이디를 입력해주세요" />
          <S.styledInput placeholder="비밀번호를 입력해주세요" />
        </S.inputArea>
        <S.styledButton>로그인</S.styledButton>
        <S.defaultLink to="/signup">
          <S.styledButton2>회원가입</S.styledButton2>
        </S.defaultLink>
      </S.LoginBox>
    </S.styledDiv>
  );
};

export default LoginTemplate;
