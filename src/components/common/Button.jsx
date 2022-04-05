import styled from "styled-components";

import React from "react";

const StyledButton = styled.button`
  position: relative;
  width: 200px;
  height: 50px;
  right: 130px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  outline: 0;
  border: 1px solid;
  border-color: #fff;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.6s;
  &:hover {
    background-color: #00a885;
    border-color: #00a88f;
    transition: all 0.6s;
  }
`;

export const ButtonGo = () => {
  return (
    <div>
      <StyledButton>Enter</StyledButton>
    </div>
  );
};
