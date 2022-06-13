import React from "react";
import * as S from "./style";

const postMain = () => {
  return (
    <div>
      <S.imageDiv>
        <S.menuArea>
          <span>번호</span>
          <span>제목</span>
          <span>이름</span>

          <span className="H">날짜</span>
          <span className="H">조회수</span>
          <></>
        </S.menuArea>
      </S.imageDiv>
    </div>
  );
};

export default postMain;
