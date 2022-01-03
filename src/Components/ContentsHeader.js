import React from "react";
import styled from "styled-components";
import filterIcon from "../Assets/Images/Icons/filter.png";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const LBox = styled.div`
  display: flex;
  align-items: center;
`;

const ListIcon = styled.div`
  width: 7px;
  height: 7px;
  background-color: rgba(255, 255, 255, 1);
  margin-right: 5px;
`;

const ListTitle = styled.div`
  font-family: "Outfit", sans-serif;
  color: rgba(255, 255, 255, 1);
`;

const RBox = styled.div`
  height: 14px;
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.img`
  height: 10px;
  width: 10px;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const ContentsHeader = ({ title, filter }) => {
  return (
    <Box className="dD">
      <LBox>
        <ListIcon></ListIcon>
        <ListTitle>{title}</ListTitle>
      </LBox>
      <RBox>{filter ? <Filter src={filterIcon}></Filter> : null}</RBox>
    </Box>
  );
};

export default ContentsHeader;
