import React from "react";
import * as S from "./style";
import axios from "axios";

const LoginTemplate = () => {
  const handleLogin = () => {
    axios
      .post(
        "localhost:5000/api/auth/login",
        {
          username: "user",
          password: "1234",
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.cookies);
        alert(res.data.message);
        console.log(res);
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        throw new Error(error);
      });
  };
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
        <S.styledButton onClick={handleLogin}>로그인</S.styledButton>
        <S.defaultLink to="/signup">
          <S.styledButton2>회원가입</S.styledButton2>
        </S.defaultLink>
      </S.LoginBox>
    </S.styledDiv>
  );
};

export default LoginTemplate;
