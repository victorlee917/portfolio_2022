import youtube from "../Images/Icons/youtube.png";
import mainImg from "../Images/Contents/Hufs/hufs_main.png";
import { updateHeader } from "./Data_Func";

const HufsHeader = {
  stage: "Detail",
  path: "hufs",
  title: "HUFS App Prototype",
  desc: (
    <>
      자체 졸전 프로젝트<p></p>한국외대 교내 앱 개선 프로토타입
    </>
  ),
  channelArray: [
    {
      url: "https://www.youtube.com/watch?v=FmPCZD-Kp2Q",
      platform: youtube,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const HufsContents = [
  {
    date: "2018/08/30",
    title: "HUFS 앱 프로토타입 제작",
    desc: ["Framer를 활용한 HUFS 앱 프로토타입 제작"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://www.youtube.com/watch?v=FmPCZD-Kp2Q",
        platform: youtube,
      },
    ],
  },
];

updateHeader(HufsHeader, HufsContents);

export { HufsHeader, HufsContents };
