import styled from "styled-components";
import Image from "../../img/MainImage.jpg";

export const styleArea = styled.div`
  background-image: url(${Image});
  position: relative;
  background-size: 100%;
  height: 600px;
  margin: 15px;
`;

export const imageDiv = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  height: 700px;
  background-color: #525050;
`;

export const backgroundArea = styled.div`
  width: 100%;
  height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
`;
