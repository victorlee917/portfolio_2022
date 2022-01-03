import React from "react";
import styled from "styled-components";
import upIcon from "../Assets/Images/Icons/up.png";

const Box = styled.div`
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  transition: 0.5s ease-in-out;
  right: 40px;
  bottom: ${(props) => (props.visible ? "80px" : "-32px;")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.1);
  &:hover {
    transition: 0.5s ease-in-out;
    border-color: rgba(255, 255, 255, 1);
  }
  &:hover img {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
  @media screen and (max-width: 1350px) {
    right: 30px;
    bottom: ${(props) => (props.visible ? "30x" : "-32px;")};
  }
  @media screen and (max-width: 1000px) {
    right: 50px;
    bottom: ${(props) => (props.visible ? "55px" : "-32px;")};
  }
  @media screen and (max-width: 479px) {
    right: 30px;
    bottom: ${(props) => (props.visible ? "55px" : "-32px;")};
  }
`;

const Icon = styled.img`
  height: 16px;
  opacity: 0.3;
`;

const GoUp = ({ scrollHeight }) => {
  return (
    <Box
      id="goUp"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      visible={scrollHeight > 840 ? true : false}
      className="dD"
    >
      <Icon src={upIcon}></Icon>
    </Box>
  );
};

export default GoUp;
