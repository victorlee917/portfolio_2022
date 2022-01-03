import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background: ${(props) =>
    ` rgba(0,0,0,1) url(${props.mainImg}) no-repeat center center`};
  background-size: 100%;
  min-width: 100%;
  padding-top: 56.25%;
  margin-bottom: 30px;
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.05);
`;

const MainImg = ({ mainImg }) => {
  return <Box mainImg={mainImg}></Box>;
};

export default MainImg;
