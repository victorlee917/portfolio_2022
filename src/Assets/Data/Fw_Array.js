import url from "../Images/Icons/url.png";
import youtube from "../Images/Icons/youtube.png";
import mainImg from "../Images/Contents/Fw/fw_main.png";
import { updateHeader } from "./Data_Func";

const FwHeader = {
  stage: "Detail",
  path: "fw",
  title: "Free Writing Tutorial",
  desc: (
    <>
      피터 엘보의 자유롭게 쓰기<p></p>가장 손쉽고 효과적인 글쓰기 연습법
    </>
  ),
  channelArray: [
    {
      url: "https://victorlee917.github.io/freewriting_beta/index.html",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const FwContents = [
  {
    date: "2019/03/04",
    title: "Free Writing 제작",
    desc: [
      "Javascript/AWS를 활용한 Free Writing 웹사이트 제작",
      "서버비 발생으로 현재는 제공 중단",
    ],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://youtu.be/pzoGBWTA_1A",
        platform: youtube,
      },
    ],
  },
  {
    date: "2018/09/17",
    title: "Free Writing Beta 제작",
    desc: ["Javascript를 활용한 Free Writing 웹사이트 제작"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://victorlee917.github.io/freewriting_beta/index.html",
        platform: url,
      },
    ],
  },
];

updateHeader(FwHeader, FwContents);

export { FwHeader, FwContents };
