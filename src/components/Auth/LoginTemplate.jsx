import React from "react";
import * as S from "./style";

const LoginTemplate = () => {
  return (
    <S.styledDiv>
      <S.LoginBox>
        <h1>SURVEY</h1>
        <S.inputArea>
          <S.styledInput placeholder="아이디를 입력해주세요" />
          <S.styledInput placeholder="비밀번호를 입력해주세요" />
        </S.inputArea>
      </S.LoginBox>
    </S.styledDiv>
  );
};

export default LoginTemplate;
