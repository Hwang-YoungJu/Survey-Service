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
`;
