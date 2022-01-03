import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
`;

const ChannelBox = styled.a`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.05);
  margin-right: 15px;
  &:hover {
    transition: 0.5s ease-in-out;
    border-color: rgba(255, 255, 255, 1);
  }
  &:hover img {
    transition: 0.5s ease-in-out;
    opacity: 1;
  }
  :last-child {
    margin-right: 0px;
  }
`;

const ChannelIcon = styled.img`
  height: 14px;
  opacity: 0.3;
`;

const Channel = ({ channelArray }) => {
  return (
    <Box className="dD">
      {channelArray
        ? channelArray.map((item, index) => (
            <ChannelBox
              target="_blank"
              key={index}
              href={item.url}
              download={item.type === "download" ? true : false}
            >
              <ChannelIcon src={item.platform}></ChannelIcon>
            </ChannelBox>
          ))
        : null}
    </Box>
  );
};

export default Channel;
