import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../../img/MainImage.jpg";

export const defaultLink = styled(Link)`
  text-decoration: none;
`;

export const styleArea = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  position: relative;

  height: 600px;
  margin: 15px;
`;

export const imageDiv = styled.div`
  position: absolute;
  padding-top: 50px;
  top: 100px;
  width: 80%;
  left: 10%;
  height: 650px;
  background-color: #bc9f9f;
  h1 {
    position: absolute;
    top: -24px;
    right: 50px;
    color: #00a885;
  }
`;

export const imageDiv2 = styled.div`
  position: absolute;
  padding-top: 50px;
  top: 100px;
  width: 80%;
  left: 10%;
  height: 500px;
  background-color: #bc9f9f;
  h1 {
    position: absolute;
    top: -24px;
    right: 50px;
    color: #00a885;
  }
`;

export const menuArea = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  padding: 15px 0;
  border-top-width: 2px;
  border-top-style: solid;
  border-bottom: 1px solid #e2e2e2;
  border-collapse: separate;
  span {
    display: table-cell;
    text-align: center;
  }
  .H {
    display: inline-block;
    width: 80px;
  }
`;

export const menuArea2 = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  padding: 15px 0;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  border-collapse: separate;
  span {
    display: table-cell;
    text-align: center;
  }
  .H {
    display: inline-block;
    width: 80px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const inputDiv = styled.div`
  position: relative;

  margin: 0 auto;
  width: 800px;
  height: 300px;
  background-color: #a5a5a5;
  label {
    font-size: 25px;
  }
  div {
    align-items: center;
    width: 150px;
    height: 50px;
    margin-left: 180px;
  }
  h1 {
    position: relative;
    top: 10px;
    left: 36%;
  }
`;

export const styledInput = styled.input`
  margin: 10px 140px;
  position: relative;
  width: 500px;
  height: 50px;
  &:first-child {
    margin-top: 15px;
  }
`;

export const radioInput = styled.input`
  position: relative;
  width: 20px;
  height: 20px;
  margin: 20px;
`;

export const styledButton = styled.button`
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
  bottom: 2%;
  margin-top: 20px;
  left: 30%;

  &:hover {
    background-color: #00a88f;
    transition: all 0.4s;
    color: #000;
  }
`;
