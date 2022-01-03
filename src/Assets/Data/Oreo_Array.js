import brunch from "../Images/Icons/brunch.png";
import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Oreo/oreo_main.png";
import img1 from "../Images/Contents/Oreo/oreo_1.png";

import { updateHeader } from "./Data_Func";

const OreoHeader = {
  stage: "Detail",
  path: "oreo",
  title: "OREO Tutorial",
  desc: (
    <>
      150년 하버드 글쓰기 비법<p></p>OREO Tutorial 웹사이트
    </>
  ),
  channelArray: [
    {
      url: "https://victorlee917.github.io/oreo/#/",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const OreoContents = [
  {
    date: "2019/08/21",
    img: img1,
    title: "OREO Tutorial 제작",
    desc: [
      "React를 활용한 OREO 웹사이트 제작",
      "OREO 글쓰기 비법 관련 글 작성",
    ],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://victorlee917.github.io/oreo/#/",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/105",
        platform: brunch,
      },
    ],
  },
];

updateHeader(OreoHeader, OreoContents);

export { OreoHeader, OreoContents };
