import React from "react";
import * as S from "./style";

const writePost = () => {
  return (
    <div>
      <S.imageDiv>
        <S.inputDiv>
          <S.styledInput type="text" placeholder="title" name="title" />
          <S.styledInput
            type="question1"
            placeholder="question1"
            name="ques1"
          />
          <S.styledInput
            type="question2"
            placeholder="question2"
            name="ques2"
          />
          <S.styledButton>SAVE</S.styledButton>
        </S.inputDiv>
      </S.imageDiv>
    </div>
  );
};

export default writePost;
