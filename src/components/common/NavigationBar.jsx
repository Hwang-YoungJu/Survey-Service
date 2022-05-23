import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: white;
  position: relative;
  align-items: center;
  z-index: 1;
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  top: 0px;
  h1 {
    position: absolute;
    display: block;
    width: 100px;
    margin: 20px 0 20px 0;
    font-size: 36px;
    line-height: 40px;
    top: 8px;
    left: 60px;
    color: #00a885;
  }
  h2 {
    position: relative;
    display: block;
    width: 80px;
    height: 50px;
    padding: 10px;
    font-size: 18px;
    line-height: 20px;
    top: 10px;
    right: 80px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  position: absolute;
  right: 0px;
  div {
    width: 250px;
    display: flex;
  }
`;

const NavigationBar = () => {
  return (
    <>
      <Bar>
        <h1>SURVEY</h1>
        <LoginBox>
          <div>
            <h2>Sign in</h2>
            <h2>Sign up</h2>
          </div>
        </LoginBox>
      </Bar>
    </>
  );
};

export default NavigationBar;
