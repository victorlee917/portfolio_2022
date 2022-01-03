import url from "../Images/Icons/url.png";
import brunch from "../Images/Icons/brunch.png";
import mainImg from "../Images/Contents/Portfolio/portfolio_main.png";
import { updateHeader } from "./Data_Func";

const PortfolioHeader = {
  stage: "Detail",
  path: "portfolio",
  title: "Portfolio Page",
  desc: <>이준우의 포트폴리오 웹사이트</>,
  channelArray: [
    {
      url: "https://junwoolee.me",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const PortfolioContents = [
  {
    date: "2022/01/05",
    title: "2022 포트폴리오 사이트 제작",
    desc: ["포트폴리오 사이트 제작", "포트폴리오 사이트 제작기 글 작성"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://victorlee917.github.io/portfolio_2022/",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/179",
        platform: brunch,
      },
    ],
  },
  {
    date: "2020/04/07",
    title: "2020 포트폴리오 사이트 제작",
    desc: ["포트폴리오 사이트 제작"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://victorlee917.github.io/portfolio_2020/",
        platform: url,
      },
    ],
  },
];

updateHeader(PortfolioHeader, PortfolioContents);

export { PortfolioHeader, PortfolioContents };
