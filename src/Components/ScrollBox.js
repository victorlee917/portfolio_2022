import React from "react";
import styled from "styled-components";
import Channel from "./Channel";
import All_Array from "../Assets/Data/All_Array";

const Box = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 90000;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 1000px) {
    transition: 0.5s ease-in-out;
    top: ${(props) => (props.visible ? "50px" : "0px")};
  }
  @media screen and (max-width: 479px) {
  }
`;

const ProgressBar = styled.div`
  height: 1px;
  background-color: rgba(249, 212, 110, 1);
  width: ${(props) => props.scrollRatio};
`;

const Header = styled.div`
  z-index: 90001;
  position: fixed;
  top: -50px;
  width: 100%;
  height: 50px;
  background-color: rgba(21, 21, 21, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  color: rgba(255, 255, 255, 1);
  @media screen and (max-width: 1000px) {
    transition: 0.5s ease-in-out;
    top: ${(props) => (props.visible ? "0px" : "-50px")};
  }
  @media screen and (max-width: 479px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.div`
  font-family: Outfit, sans-serif;
  font-weight: 800;
`;

const ScrollBox = ({ scrollRatio, scrollHeight, pathname, stage }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const capitalizedPathname = capitalizeFirstLetter(pathname);
  const channelArray =
    pathname === ""
      ? All_Array["home"][0].channelArray
      : All_Array[pathname][0].channelArray;
  return (
    <>
      <Box visible={scrollHeight > 840 ? true : false} className="dD">
        <ProgressBar
          scrollRatio={scrollRatio}
          visible={scrollHeight > 840 ? true : false}
        ></ProgressBar>
      </Box>
      <Header visible={scrollHeight > 840 ? true : false} className="dD">
        <Title onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {stage === "Home" ? "Junwoo Lee" : capitalizedPathname}
        </Title>
        <Channel channelArray={channelArray}></Channel>
      </Header>
    </>
  );
};

export default ScrollBox;
