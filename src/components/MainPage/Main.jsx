import React from "react";
import * as S from "./style";
import * as B from "../common/Button";

const Main = () => {
  return (
    <S.backgroundArea>
      <S.imageDiv>
        <S.styleArea>
          <S.textBox>
            <h2>Welcome to</h2>
            <h1>SURVEY</h1>
            <h3>간단한 설문조사에 참여하세요!</h3>
            <B.ButtonGo />
          </S.textBox>
        </S.styleArea>
      </S.imageDiv>
    </S.backgroundArea>
  );
};

export default Main;
