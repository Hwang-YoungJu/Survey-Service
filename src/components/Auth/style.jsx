import styled from "styled-components";

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
  background-color: royalblue;
  position: relative;
  top: 30%;
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
  background-color: #00a88f;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  position: absolute;
`;
