import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  height: 100px;
  top: 0px;
  h1 {
    position: relative;
    display: block;
    top: 10px;
    left: 30px;
    color: #00a88f;
  }
`;

const NavigationBar = () => {
  return (
    <>
      <Bar>
        <h1>SURVEY</h1>
      </Bar>
    </>
  );
};

export default NavigationBar;
