import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Channel from "./Channel";

const Box = styled.div`
  color: rgba(255, 255, 255, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.05);
  margin-bottom: 20px;
  overflow: hidden;
`;

const TBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-family: "Outfit", sans-serif;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.3);
`;

const Date = styled.div``;

const Count = styled.div``;

const BBox = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
`;

const BTBox = styled.div`
  width: 100%;
  padding-top: ${(props) =>
    props.ratio ? (props.ratio === "16:9" ? "56.25%" : "100%") : "0px"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: cover;
`;

const BBBox = styled.div`
  border-top: 1px solid;
  border-top-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 10px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const TitleLine = styled.div`
  height: 16px;
  margin-right: 8px;
  width: 5px;
  background-color: rgba(255, 255, 255, 1);
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 20px;
`;

const DescBox = styled.div`
  font-weight: 200;
  line-height: 1.8;
  opacity: 0.5;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const DescIcon = styled.div`
  width: 3px;
  height: 3px;
  background-color: rgba(255, 255, 255, 1);
  margin-right: 10px;
`;

const DescText = styled.div`
  font-size: 12px;
`;

const TagBox = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
`;

const TagChip = styled.div`
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.05);
`;

const TagText = styled.span`
  opacity: 0.5;
  font-weight: 200;
  font-size: 11px;
`;

const Border = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  height: 1px;
  margin-bottom: 12px;
  margin-top: 20px;
`;

const ChannelBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const DetailCard = ({
  date,
  count,
  img,
  ratio,
  title,
  desc,
  tags,
  channelArray,
}) => {
  return (
    <Box className="dD">
      <TBox>
        <Date>{date}</Date>
        <Count>{count}</Count>
      </TBox>
      <BBox>
        {img ? <BTBox img={img} ratio={ratio}></BTBox> : null}
        <BBBox>
          <TitleBox>
            <TitleLine></TitleLine>
            <Title>{title}</Title>
          </TitleBox>
          {desc.map((item, index) => (
            <DescBox key={index}>
              <DescIcon></DescIcon>
              <DescText>{item}</DescText>
            </DescBox>
          ))}

          <TagBox>
            {tags.map((tag, index) => (
              <TagChip key={index}>
                <TagText>{tag}</TagText>
              </TagChip>
            ))}
          </TagBox>
          <Border></Border>
          <ChannelBox>
            <Channel channelArray={channelArray}></Channel>
          </ChannelBox>
        </BBBox>
      </BBox>
    </Box>
  );
};

export default DetailCard;
