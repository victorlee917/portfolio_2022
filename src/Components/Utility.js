import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
`;

const ColoredText = styled.span`
  color: ${(props) => props.color};
`;

const ShortBorder = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.1);
  margin-top: 12px;
  margin-bottom: 20px;
`;

const OutLink = styled.a``;

const BL = () => {
  return <Block></Block>;
};

const CT = ({ color, children }) => {
  return <ColoredText color={color}>{children}</ColoredText>;
};

const SB = () => {
  return <ShortBorder className="dD">-</ShortBorder>;
};

const OL = (url, title) => {
  return (
    <OutLink href={url} target="_blank">
      {title}
    </OutLink>
  );
};

export { BL, CT, SB, OL };
