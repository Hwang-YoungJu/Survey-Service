import styled from "styled-components";
import { Link } from "react-router-dom";

export const defaultLink = styled(Link)`
  text-decoration: none;
`;
export const styledDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginBox = styled.div`
  position: absolute;
  width: 500px;
  height: 600px;
  background-color: rgb(188, 143, 143);
  h1 {
    position: absolute;
    display: block;
    width: 100px;
    margin: 20px 0 20px 0;
    font-size: 50px;
    line-height: 40px;
    top: 20px;
    left: 31%;
    color: #00a885;
  }
`;

export const inputArea = styled.div`
  width: 400px;
  height: 300px;

  position: relative;
  top: 25%;
  left: 10%;
`;

export const styledInput = styled.input`
  color: #00a88f;
  position: relative;
  font-size: 15px;
  padding-left: 10px;
  width: 350px;
  height: 50px;
  border: 5px solid #00a885;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 10px;
  ::placeholder {
    color: #00a88f;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const styledButton = styled.button`
  background-color: #fff;
  color: #00a88f;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  position: relative;
  border: 2px solid #00a88f;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  top: 15%;
  left: 20%;
  &:hover {
    background-color: #00a88f;
    transition: all 0.4s;
    color: #000;
  }
`;

export const styledButton2 = styled.button`
  background-color: #fff;
  color: #00a88f;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
  border: 2px solid #00a88f;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  bottom: 10%;
  margin-top: 20px;
  left: 20%;

  &:hover {
    background-color: #00a88f;
    transition: all 0.4s;
    color: #000;
  }
`;
