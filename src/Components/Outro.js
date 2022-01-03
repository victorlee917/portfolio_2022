import React from "react";
import styled from "styled-components";
import Memoji from "../Assets/Images/Icons/Memoji.png";

const Box = styled.div`
  width: 100%;
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
`;

const LBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thanks = styled.div`
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 5px;
`;

const Contact = styled.div`
  font-weight: 200;
  line-height: 1.8;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

const RBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const Me = styled.img`
  width: 100%;
  height: 100%;
`;

const Outro = () => {
  return (
    <Box className="dD">
      <LBox>
        <Thanks>WOW! 여기까지 내려와주셔서 감사해요!</Thanks>
        <Contact>더 궁금한 점이 있다면 언제든 채널로 말을 걸어주세요.</Contact>
      </LBox>
      <RBox>
        <Me src={Memoji}></Me>
      </RBox>
    </Box>
  );
};

export default Outro;
