import { BL, CT } from "../../Components/Utility";
import instagram from "../Images/Icons/instagram.png";
import brunch from "../Images/Icons/brunch.png";
import kakao from "../Images/Icons/kakao.png";
import mainImg from "../Images/Contents/Home/junwoolee_main.png";
import { MojittoHeader } from "./Mojitto_Array";
import { CutifyHeader } from "./Cutify_Array";
import { MontageHeader } from "./Montage_Array";
import { FreeHeader } from "./Free_Array";
import { OreoHeader } from "./Oreo_Array";
import { CcHeader } from "./Cc_Array";
import { TidesHeader } from "./Tides_Array";
import { FwHeader } from "./Fw_Array";
import { HufsHeader } from "./Hufs_Array";
import { FigHeader } from "./Fig_Array";
import { SupernovaHeader } from "./Supernova_Array";
import { PortfolioHeader } from "./Portfolio_Array";

const HomeHeader = {
  stage: "Home",
  title: "Junwoo Lee",
  desc: (
    <>
      안녕하세요! 이준우입니다.
      <p></p>사이드 프로젝트를 사랑하는{" "}
      <CT color="rgba(255,255,255,1)">기획자</CT>입니다.<p></p>글쓰는 거랑 먹는
      거 좋아합니다.
      <BL></BL> <BL></BL>
      P.S <CT color="rgba(249, 212, 110, 1)">노란 안경</CT>을 자주 씁니다!
    </>
  ),
  channelArray: [
    { url: "https://instagram.com/jwluoe/", platform: instagram },
    { url: "https://brunch.co.kr/@vicotorlee", platform: brunch },
    { url: "https://namecard.kakao.com/jwluoe", platform: kakao },
  ],
  mainImg: mainImg,
  introArray: [
    {
      type: "Education",
      itemArray: [
        {
          item: "HUFS, Department of Chinese Studies (2012-2019)",
          url: "https://www.hufs.ac.kr/",
          status: null,
        },
        {
          item: "GDUFS, Exchange Student (2017)",
          url: "https://www.gdufs.edu.cn/",
          status: null,
        },
      ],
    },
    {
      type: "Experience",
      itemArray: [
        {
          item: "TEAM BLENDER, PM (2020-)",
          url: "https://teamblender.co/",
          status: "now",
        },
        {
          item: "NAVER FINANCIAL, PM (2020-)",
          url: "https://www.naverfincorp.com/main",
          status: "now",
        },
        {
          item: "NAVER, PM (2019-2020)",
          url: "https://www.naverfincorp.com/main",
          status: "null",
        },
        {
          item: "S.O.P.T (2015-2016)",
          url: "http://sopt.org/wp/",
          status: "null",
        },
      ],
    },
  ],
};

const HomeContents = [
  {
    img: MontageHeader.mainImg,
    ratio: MontageHeader.ratio,
    path: MontageHeader.path,
    title: MontageHeader.title,
    subTitle: MontageHeader.desc,
    lastUpdate: MontageHeader.lastUpdate,
    tags: MontageHeader.tags,
  },
  {
    img: MojittoHeader.mainImg,
    ratio: MojittoHeader.ratio,
    path: MojittoHeader.path,
    title: MojittoHeader.title,
    subTitle: MojittoHeader.desc,
    lastUpdate: MojittoHeader.lastUpdate,
    tags: MojittoHeader.tags,
  },
  {
    img: CutifyHeader.mainImg,
    ratio: CutifyHeader.ratio,
    path: CutifyHeader.path,
    title: CutifyHeader.title,
    subTitle: CutifyHeader.desc,
    lastUpdate: CutifyHeader.lastUpdate,
    tags: CutifyHeader.tags,
  },
  {
    img: FreeHeader.mainImg,
    ratio: FreeHeader.ratio,
    path: FreeHeader.path,
    title: FreeHeader.title,
    subTitle: FreeHeader.desc,
    lastUpdate: FreeHeader.lastUpdate,
    tags: FreeHeader.tags,
  },
  {
    img: OreoHeader.mainImg,
    ratio: OreoHeader.ratio,
    path: OreoHeader.path,
    title: OreoHeader.title,
    subTitle: OreoHeader.desc,
    lastUpdate: OreoHeader.lastUpdate,
    tags: OreoHeader.tags,
  },
  {
    img: CcHeader.mainImg,
    ratio: CcHeader.ratio,
    path: CcHeader.path,
    title: CcHeader.title,
    subTitle: CcHeader.desc,
    lastUpdate: CcHeader.lastUpdate,
    tags: CcHeader.tags,
  },
  {
    img: TidesHeader.mainImg,
    ratio: TidesHeader.ratio,
    path: TidesHeader.path,
    title: TidesHeader.title,
    subTitle: TidesHeader.desc,
    lastUpdate: TidesHeader.lastUpdate,
    tags: TidesHeader.tags,
  },
  {
    img: FwHeader.mainImg,
    ratio: FwHeader.ratio,
    path: FwHeader.path,
    title: FwHeader.title,
    subTitle: FwHeader.desc,
    lastUpdate: FwHeader.lastUpdate,
    tags: FwHeader.tags,
  },
  {
    img: HufsHeader.mainImg,
    ratio: HufsHeader.ratio,
    path: HufsHeader.path,
    title: HufsHeader.title,
    subTitle: HufsHeader.desc,
    lastUpdate: HufsHeader.lastUpdate,
    tags: HufsHeader.tags,
  },
  {
    img: FigHeader.mainImg,
    ratio: FigHeader.ratio,
    path: FigHeader.path,
    title: FigHeader.title,
    subTitle: FigHeader.desc,
    lastUpdate: FigHeader.lastUpdate,
    tags: FigHeader.tags,
  },
  {
    img: SupernovaHeader.mainImg,
    ratio: SupernovaHeader.ratio,
    path: SupernovaHeader.path,
    title: SupernovaHeader.title,
    subTitle: SupernovaHeader.desc,
    lastUpdate: SupernovaHeader.lastUpdate,
    tags: SupernovaHeader.tags,
  },
  {
    img: PortfolioHeader.mainImg,
    ratio: PortfolioHeader.ratio,
    path: PortfolioHeader.path,
    title: PortfolioHeader.title,
    subTitle: PortfolioHeader.desc,
    lastUpdate: PortfolioHeader.lastUpdate,
    tags: PortfolioHeader.tags,
  },
];

export { HomeHeader, HomeContents };
