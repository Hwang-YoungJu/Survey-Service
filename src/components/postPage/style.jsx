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
  top: 100px;
  width: 80%;
  left: 10%;
  height: 650px;
  background-color: #6d6d6d;
`;

export const backgroundArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
