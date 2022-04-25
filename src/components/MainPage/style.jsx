import styled from "styled-components";
import Image from "../../img/MainImage.jpg";

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
  width: 100vw;
  height: 650px;
  background-color: #525050;
`;

export const backgroundArea = styled.div`
  width: 100%;
  height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const textBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  background-color: rgba(17, 35, 59, 0.3);
  border-radius: 50px;
  top: 180px;
  left: 32%;
  width: 500px;
  height: 300px;
  h1 {
    position: relative;
    top: 10px;
    font-size: 60px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  h2 {
    position: relative;
    top: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    font-size: 40px;
  }
  h3 {
    position: relative;
    left: 90px;
    bottom: 75px;
  }
  /* @media only screen and (max-width: 2040px) {
    left: 660px;
  }
  @media screen and (max-width: 1700px) {
    left: calc(100% - 1000px);
  }
  @media screen and (max-width: 1480px) {
    left: 430px;
  }
  @media screen and (max-width: 1300px) {
    left: 350px;
  }

  @media only screen and (max-width: 1150px) {
    left: 250px;
  }
  @media only screen and (max-width: 1000px) {
    left: 190px;
  } */
`;
