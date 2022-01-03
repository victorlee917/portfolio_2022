import React from "react";
import styled from "styled-components";
import left from "../Assets/Images/Icons/left.png";
import Channel from "./Channel";
import { SB } from "./Utility";

const Box = styled.div`
  color: rgba(255, 255, 255, 1);
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0px 80px 80px;
  @media screen and (max-width: 1000px) {
    position: relative;
    padding: 80px 30px 0px 30px;
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    padding: 80px 20px 0px 20px;
  }
`;

const TBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
`;

const BackIcon = styled.img`
  height: 100%;
`;

const Hello = styled.div`
  font-weight: 800;
  line-height: 1.2;
  font-size: 48px;
  font-family: "Outfit", sans-serif;
`;

const HomeTitle = styled.div`
  font-weight: 800;
  line-height: 1.5;
  max-width: 285px;
  display: block;
  overflow: hidden;
  font-size: 48px;
  font-family: "Outfit", sans-serif;
  animation: animated-text 1s steps(40, end) 1s 1 normal both;
  white-space: nowrap;
  margin-bottom: 30px;
  position: relative;
`;

const Title = styled.div`
  font-weight: 800;
  line-height: 1.5;
  font-size: 48px;
  font-family: "Outfit", sans-serif;
  margin-bottom: 30px;
`;

const Dot = styled.div`
  border-bottom: solid 3px rgba(249, 212, 110, 1);
  position: absolute;
  right: 5px;
  bottom: 10px;
  width: 10px;
  animation: animated-cursor 1s steps(30, end) infinite;
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 100;
  font-size: 17px;
`;

const BBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Author = styled.a`
  opacity: 0.5;
  font-weight: 500;
  font-size: 12px;
  &:hover {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
`;

const Header = ({
  title = "Junwoo Lee",
  desc,
  channelArray,
  stage,
  navigate,
}) => {
  return (
    <Box className="dD">
      <TBox>
        {stage === "Home" ? null : (
          <BackButton onClick={() => navigate(-1)}>
            <BackIcon src={left}></BackIcon>
          </BackButton>
        )}
        {stage === "Home" ? (
          <>
            <Hello>Hello! I'm</Hello>{" "}
            <HomeTitle className="dD">
              {title}
              <Dot></Dot>
            </HomeTitle>
          </>
        ) : (
          <Title>{title}</Title>
        )}

        <Desc className="dD">{desc}</Desc>
        <SB></SB>
        <Channel channelArray={channelArray}></Channel>
      </TBox>
      <BBox>
        <Author className="dD" href="/" target="_self">
          ⓒjunwoolee
        </Author>
      </BBox>
    </Box>
  );
};

export default Header;
