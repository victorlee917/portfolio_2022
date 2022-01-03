import React, { useState, useEffect } from "react";
import Container from "../Components/Container";
import Header from "../Components/Header";
import All_Array from "../Assets/Data/All_Array";
import { useLocation, useNavigate } from "react-router-dom";
import Contents from "../Components/Contents";
import MainImg from "../Components/MainImg";
import ContentsHeader from "../Components/ContentsHeader";
import GoUp from "../Components/GoUp";
import Intro from "../Components/Intro";
import ContentsCard from "../Components/ContentsCard";
import DetailCard from "../Components/DetailCard";
import ScrollBox from "../Components/ScrollBox";
import Outro from "../Components/Outro";

const View = () => {
  const [scrollValue, setScrollValue] = useState({
    scrollHeight: 0,
    scrollratio: 0,
  });
  const scrollFunc = () => {
    const scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const entireHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollRatio = (scrollHeight / entireHeight) * 100;
    setScrollValue({
      scrollHeight: scrollHeight,
      scrollRatio: scrollRatio,
    });
  };
  useEffect(() => {
    window.onscroll = () => {
      scrollFunc();
    };
  }, []);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathEdited = pathname.substr(1, pathname.length).toLowerCase();
  const pathResult = pathEdited.length === 0 ? "home" : pathEdited;
  let [headerArray, contentsArray] = All_Array[pathResult];
  if (headerArray.stage === "Home") {
    contentsArray = contentsArray.sort(
      (a, b) => new Date(b.lastUpdate.date) - new Date(a.lastUpdate.date)
    );
  }
  const goToDetail = (detail) => {
    const purifyTitle = detail.toLowerCase();
    navigate(`/${purifyTitle}`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Container>
        <Header
          stage={headerArray.stage}
          title={headerArray.title}
          desc={headerArray.desc}
          channelArray={headerArray.channelArray}
          navigate={navigate}
        ></Header>
        <Contents>
          <MainImg mainImg={headerArray.mainImg}></MainImg>
          {headerArray.stage === "Home" ? (
            <>
              <ContentsHeader title={"About"}></ContentsHeader>
              <Intro introArray={headerArray.introArray}></Intro>
            </>
          ) : (
            <>
              {headerArray.introArray ? (
                <>
                  <ContentsHeader title={"About"}></ContentsHeader>
                  <Intro introArray={headerArray.introArray}></Intro>
                </>
              ) : null}
            </>
          )}
          <ContentsHeader
            title={headerArray.stage === "Home" ? "Dots" : "Timeline"}
          ></ContentsHeader>
          {headerArray.stage === "Home"
            ? contentsArray.map((content, index) => (
                <ContentsCard
                  key={index}
                  stage={headerArray.stage}
                  path={content.path}
                  title={content.title}
                  subTitle={content.subTitle}
                  img={content.img}
                  ratio={content.ratio ? content.ratio : "16:9"}
                  lastUpdate={content.lastUpdate}
                  tags={content.tags}
                  goTo={headerArray.stage === "Home" ? goToDetail : null}
                ></ContentsCard>
              ))
            : contentsArray.map((content, index) => (
                <DetailCard
                  key={index}
                  date={content.date}
                  count={`${contentsArray.length - index}/${
                    contentsArray.length
                  }`}
                  img={content.img}
                  ratio={content.ratio ? content.ratio : "16:9"}
                  title={content.title}
                  desc={content.desc}
                  tags={content.tags}
                  channelArray={content.channelArray}
                ></DetailCard>
              ))}
          <Outro></Outro>
        </Contents>
      </Container>
      <GoUp scrollHeight={scrollValue.scrollHeight}></GoUp>
      <ScrollBox
        pathname={pathResult}
        scrollHeight={scrollValue.scrollHeight}
        scrollRatio={scrollValue.scrollRatio + "%"}
        stage={headerArray.stage}
      ></ScrollBox>
    </>
  );
};

export default View;
