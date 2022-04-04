import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: white;
  position: absolute;
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;
  top: 0px;
  h1 {
    position: absolute;
    display: block;
    width: 100px;
    margin: 20px 0 20px 0;
    line-height: 40px;
    top: 8px;
    left: 30px;
    color: #00a88f;
  }
  h2 {
    position: relative;
    display: block;
    width: 80px;
    height: 50px;
    padding: 10px;
    font-size: 20px;
    line-height: 20px;
    top: 10px;
    right: 80px;
  }
  div {
    width: 90px;
    margin-right: 20px;
  }
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  position: absolute;
  right: 0px;
`;

const NavigationBar = () => {
  return (
    <>
      <Bar>
        <h1>SURVEY</h1>
        <LoginBox>
          <div>
            <h2>Sign in</h2>
          </div>
          <div>
            <h2>Sign up</h2>
          </div>
        </LoginBox>
      </Bar>
    </>
  );
};

export default NavigationBar;
