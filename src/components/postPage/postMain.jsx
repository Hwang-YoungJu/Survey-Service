import React from "react";
import * as S from "./style";

const postMain = () => {
  const handleClick = () => {
    window.location.href = "/post";
  };
  return (
    <div>
      <S.imageDiv>
        <S.defaultLink to="/write">
          <h1>write</h1>
        </S.defaultLink>
        <S.menuArea>
          <span>번호</span>
          <span>제목</span>
          <span>이름</span>

          <span className="H">날짜</span>
          <span className="H">조회수</span>
        </S.menuArea>
        <S.menuArea2 onClick={handleClick}>
          <span>1</span>
          <span>라면먹을까요?</span>
          <span>user1</span>

          <span className="H">06/18</span>
          <span className="H">10</span>
        </S.menuArea2>
        <S.menuArea2 onClick={handleClick}>
          <span>2</span>
          <span>뭐먹죠?</span>
          <span>user1</span>

          <span className="H">06/19</span>
          <span className="H">4</span>
        </S.menuArea2>
        <S.menuArea2 onClick={handleClick}>
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
