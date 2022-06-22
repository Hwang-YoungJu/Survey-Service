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
        </S.menuArea>
        <S.menuArea2>
          <span>1</span>
          <span>치킨</span>
          <span>user1</span>

          <span className="H">06/18</span>
          <span className="H">10</span>
        </S.menuArea2>
        <S.menuArea2>
          <span>2</span>
          <span>뭐먹죠?</span>
          <span>user1</span>

          <span className="H">06/19</span>
          <span className="H">4</span>
        </S.menuArea2>
        <S.menuArea2>
          <span>3</span>
          <span>학교 왜가요?</span>
          <span>Tuser</span>

          <span className="H">06/19</span>
          <span className="H">3</span>
        </S.menuArea2>
      </S.imageDiv>
    </div>
  );
};

export default postMain;
