import React from "react";
import styled from "styled-components";

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
  cursor: ${(props) => (props.stage === "Home" ? "pointer" : "default")};
  &:hover {
    outline-color: ${(props) =>
      props.stage === "Home" ? "rgba(255,255,255,1)" : "default"};
  }
  &:hover div {
    background-size: 120%;
  }
`;

const TBox = styled.div`
  width: 100%;
  padding-top: ${(props) => (props.ratio === "16:9" ? "56.25%" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) =>
    `rgba(0,0,0,1) url(${props.img}) no-repeat center center`};
  background-size: 100%;
  transition: background-size 0.5s ease-in-out;
`;

const BBox = styled.div`
  border-top: 1px solid;
  border-top-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 10px;
`;

const BTBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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

const SubTitle = styled.div`
  margin-bottom: 12px;
  line-height: 1.8;
`;

const Border = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  height: 1px;
  margin-bottom: 12px;
`;

const LastUpdateBox = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const LastUpdateLabel = styled.div`
  margin-right: 10px;
  font-size: 12px;
`;

const LastUpdateBorder = styled.div`
  margin-right: 10px;
  width: 1px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.05);
`;

const LastUpdateTitle = styled.div`
  margin-right: 5px;
  font-size: 12px;
`;

const LastUpdateDate = styled.div`
  font-size: 10px;
  opacity: 0.5;
`;

const BBBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagChip = styled.div`
  margin-bottom: 10px;
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

const ContentsCard = ({
  stage,
  ratio,
  img,
  path,
  title,
  subTitle,
  tags,
  goTo,
  lastUpdate,
}) => {
  return (
    <Box stage={stage} onClick={() => goTo(path)}>
      <TBox ratio={ratio} img={img}></TBox>
      <BBox>
        <BTBox>
          <TitleBox>
            <TitleLine></TitleLine>
            <Title>{title}</Title>
          </TitleBox>
          <SubTitle>{subTitle}</SubTitle>
          <Border></Border>
          <LastUpdateBox>
            <LastUpdateLabel>최근 소식</LastUpdateLabel>
            <LastUpdateBorder></LastUpdateBorder>
            <LastUpdateTitle>
              #{lastUpdate.index}. {lastUpdate.title}
            </LastUpdateTitle>
            <LastUpdateDate>{lastUpdate.date}</LastUpdateDate>
          </LastUpdateBox>
        </BTBox>
        <BBBox>
          {tags
            ? tags.map((tag, index) => (
                <TagChip className="tagChips" key={index}>
                  <TagText>{tag}</TagText>
                </TagChip>
              ))
            : null}
        </BBBox>
      </BBox>
    </Box>
  );
};

export default ContentsCard;
