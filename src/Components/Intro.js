import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 25px;
  padding: 20px 20px 0px;
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 1);
`;

const ItemType = styled.div`
  opacity: 0.5;
  font-family: "Outfit", sans-serif;
  display: flex;
  align-items: center;
  font-weight: 200;
  margin-bottom: 10px;
`;

const ItemDetailBox = styled.div`
  display: flex;
  width: auto;
  font-weight: 200;
  margin-bottom: 5px;
  line-height: 1.8;
  align-items: center;
  opacity: 0.5;
  &:hover {
    opacity: ${(props) => (props.url ? "1" : "default")};
    font-weight: ${(props) => (props.url ? "400" : "200")};
  }
`;

const ItemIcon = styled.div`
  width: 3px;
  height: 3px;
  background-color: rgba(255, 255, 255, 1);
  margin-right: 10px;
`;

const ItemDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const Item = styled.a`
  margin-right: 7px;
`;

const ItemNow = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: red;
  animation: blink-effect 2s infinite;
`;

const Intro = ({ introArray }) => {
  return (
    <>
      <Box className="dD">
        {introArray.map((item, index) => (
          <ItemBox key={index}>
            <ItemType>{item.type}</ItemType>
            {item.itemArray.map((detailItem, index) => (
              <ItemDetailBox key={index} url={detailItem.url}>
                <ItemIcon></ItemIcon>
                <ItemDetail>
                  <Item href={detailItem.url} target="_blank">
                    {detailItem.item}
                  </Item>
                  {detailItem.status === "now" ? <ItemNow></ItemNow> : null}
                </ItemDetail>
              </ItemDetailBox>
            ))}
          </ItemBox>
        ))}
      </Box>
    </>
  );
};

export default Intro;
