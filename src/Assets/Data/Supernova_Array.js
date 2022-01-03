import download from "../Images/Icons/download.png";
import mainImg from "../Images/Contents/Supernova/supernova_main.png";
import { updateHeader } from "./Data_Func";

const SupernovaHeader = {
  stage: "Detail",
  path: "supernova",
  title: "초신성",
  desc: <>가상 현실과 인공지능을 소재로 한 SF 소설</>,
  channelArray: [
    {
      url: "/Files/chaoxinxing.pdf",
      platform: download,
      type: "download",
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const SupernovaContents = [
  {
    date: "2018/03/05",
    title: "초신성 집필",
    desc: ["소설 초신성 집필"],
    tags: ["작가"],
    channelArray: [
      {
        url: "/Files/chaoxinxing.pdf",
        platform: download,
        type: "download",
      },
    ],
  },
];

updateHeader(SupernovaHeader, SupernovaContents);

export { SupernovaHeader, SupernovaContents };
