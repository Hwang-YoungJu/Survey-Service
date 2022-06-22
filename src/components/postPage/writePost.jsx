import React from "react";
import * as S from "./style";

const writePost = () => {
  const handleClick = () => {
    window.location.href = "/survey";
  };
  return (
    <div>
      <S.imageDiv>
        <S.inputDiv>
          <S.styledInput type="text" placeholder="title" name="title" />
          <S.styledInput type="text" placeholder="question1" name="ques1" />
          <S.styledInput type="text" placeholder="question2" name="ques2" />
          <S.styledButton onClick={handleClick}>SAVE</S.styledButton>
        </S.inputDiv>
      </S.imageDiv>
    </div>
  );
};

export default writePost;
