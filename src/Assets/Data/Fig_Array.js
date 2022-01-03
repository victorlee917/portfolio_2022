import url from "../Images/Icons/url.png";
import instagram from "../Images/Icons/instagram.png";
import download from "../Images/Icons/download.png";
import mainImg from "../Images/Contents/Fig/fig_main.png";
import img1 from "../Images/Contents/Fig/fig_1.png";
import img2 from "../Images/Contents/Fig/fig_2.png";
import { updateHeader } from "./Data_Func";

const FigHeader = {
  stage: "Detail",
  path: "fig",
  title: "무화과",
  desc: <>루시드 드림과 페미니즘을 소재로 한 SF 소설</>,
  channelArray: [
    {
      url: "https://www.instagram.com/novel.fig/",
      platform: instagram,
    },
    {
      url: "https://victorlee917.github.io/fig/#/",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
  introArray: [
    {
      type: "Book Store",
      itemArray: [
        {
          item: "스토리지 북앤필름 강남점",
          url: "https://www.instagram.com/at_storage/",
          status: null,
        },
        {
          item: "북다마스",
          url: "https://www.instagram.com/book_damas/",
          status: null,
        },
      ],
    },
  ],
};

const FigContents = [
  {
    date: "2021/07/15",
    img: img2,
    title: "무화과 독립 출판",
    desc: [
      "소설 무화과 첨삭",
      "소설 무화과 독립 출판",
      "소설 무화과 소개 페이지 제작",
      "소설 무화과 독립 서점 입고",
    ],
    tags: ["작가", "출판", "기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://www.instagram.com/novel.fig/",
        platform: instagram,
      },
      {
        url: "https://victorlee917.github.io/fig/#/",
        platform: url,
      },
    ],
  },
  {
    date: "2017/06/08",
    img: img1,
    title: "무화과 집필",
    desc: ["소설 무화과 집필"],
    tags: ["작가"],
    channelArray: [
      {
        url: "/Files/wuhuaguo.pdf",
        platform: download,
        type: "download",
      },
    ],
  },
];

updateHeader(FigHeader, FigContents);

export { FigHeader, FigContents };
