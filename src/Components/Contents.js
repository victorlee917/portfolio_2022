import React from "react";
import styled from "styled-components";

const Box = styled.div`
  z-index: 1000;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 45%;
  width: 55%;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 100%;
    margin-top: 50px;
  }
`;

const SBox = styled.div`
  padding: 80px 80px 0px 10px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 10px 30px 0px 30px;
  }
  @media screen and (max-width: 479px) {
    padding: 10px 10px 0px 10px;
  }
`;

const Contents = ({ children }) => {
  return (
    <Box>
      <SBox>{children}</SBox>
    </Box>
  );
};

export default Contents;
