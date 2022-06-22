import React from "react";
import * as S from "./style";

const postDetail = () => {
  const handleClick = () => {
    window.location.href = "/survey";
  };
  return (
    <div>
      <S.imageDiv2>
        <S.inputDiv>
          <h1>라면먹을까요?</h1>
          <div>
            <S.radioInput type="radio" name="check" id="ques1" value="ques1" />
            <label>YES !!</label>
          </div>
          <div>
            <S.radioInput type="radio" name="check" id="ques2" value="ques2" />
            <label>NO !!</label>
          </div>
          <S.styledButton onClick={handleClick}>SUBMIT</S.styledButton>
        </S.inputDiv>
      </S.imageDiv2>
    </div>
  );
};

export default postDetail;
