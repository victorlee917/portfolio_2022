import instagram from "../Images/Icons/instagram.png";
import brunch from "../Images/Icons/brunch.png";
import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Mojitto/mojitto_main.png";
import img1 from "../Images/Contents/Mojitto/mojitto_1.png";
import img2 from "../Images/Contents/Mojitto/mojitto_2.png";
import img3 from "../Images/Contents/Mojitto/mojitto_3.png";
import img4 from "../Images/Contents/Mojitto/mojitto_4.png";
import img5 from "../Images/Contents/Mojitto/mojitto_5.png";
import img6 from "../Images/Contents/Mojitto/mojitto_6.png";
import img7 from "../Images/Contents/Mojitto/mojitto_7.png";
import { updateHeader } from "./Data_Func";

const MojittoHeader = {
  stage: "Detail",
  path: "mojitto",
  title: "Mojitto",
  desc: (
    <>
      데일리 이모지 다이어리, 모지또
      <p></p>칵테일로 표현하는 오늘의 기분
    </>
  ),
  channelArray: [
    { url: "https://www.instagram.com/mojito._.b/", platform: instagram },
    {
      url: "https://teamblender.github.io/mojito_policy_terms/#/",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
  introArray: [
    {
      type: "Records",
      itemArray: [
        {
          item: "다운로드 10만회 돌파",
          status: null,
        },
        {
          item: "회원 수 9만명 돌파",
          status: null,
        },
      ],
    },
    {
      type: "Featured",
      itemArray: [
        {
          item: "최고 순위 전체 48위",
          status: null,
        },
        {
          item: "2019년 올해 추천한 앱 20선",
          status: null,
        },
        {
          item: "7월 최고의 앱",
          status: null,
        },
        {
          item: "오늘의 앱",
          status: null,
        },
        {
          item: "이번 주 에디터의 발견",
          status: null,
        },
        {
          item: "힐링이 필요할 때 쓰는 앱",
          status: null,
        },
        {
          item: "새롭게 추천하는 앱",
          status: null,
        },
        {
          item: "감정에 귀를 기울여보세요",
          status: null,
        },
        {
          item: "하루의 감정을 기록해보세요",
          status: null,
        },
      ],
    },
  ],
};

const MojittoContents = [
  {
    date: "2021/06/16",
    img: img7,
    ratio: "1:1",
    title: "모지또 1주년 콘텐츠 제작",
    desc: ["모지또 출시 1년 간 데이터 활용한 콘텐츠 제작"],
    tags: ["콘텐츠"],
    channelArray: [
      {
        url: "https://www.instagram.com/p/CQJX8Qlnmdd/",
        platform: instagram,
      },
    ],
  },
  {
    date: "2021/05/11",
    img: img6,
    title: "모지또 통계 기능 개선",
    desc: ["유료 회원용 통계 기능 업데이트", "통계 기능 제작기 글 작성"],
    tags: ["PM", "기획"],
    channelArray: [
      {
        url: "https://brunch.co.kr/@vicotorlee/162",
        platform: brunch,
      },
    ],
  },
  {
    date: "2020/12/29",
    img: img5,
    ratio: "1:1",
    title: "모지또 AOS 버전 및 유료 버전 출시",
    desc: ["모지또 iOS 버전 출시", "모지또 GOLD 버전 출시"],
    tags: ["PM", "기획"],
    channelArray: [
      {
        url: "https://play.google.com/store/apps/details?id=com.blender.mojito",
        platform: url,
      },
    ],
  },
  {
    date: "2020/12/21",
    img: img4,
    title: "Adieu 2020 칵테일 웹사이트 제작",
    desc: [
      "React를 활용한 모지또 홍보 웹사이트 제작",
      "모지또 바이럴 관련 글 작성",
      "모지또 연말 정산 관련 콘텐츠 작성",
    ],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://adieu2020cocktail.com/#/",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/154",
        platform: brunch,
      },
      {
        url: "https://www.instagram.com/p/CJdrI45HSdB/",
        platform: instagram,
      },
    ],
  },
  {
    date: "2020/07/25",
    img: img3,
    title: "모지또 앱 기획 오답노트 작성",
    desc: ["출시 후 피드백 분석한 글 작성"],
    tags: ["기획"],
    channelArray: [
      {
        url: "https://brunch.co.kr/@vicotorlee/138",
        platform: brunch,
      },
    ],
  },
  {
    date: "2020/06/03",
    img: img2,
    title: "팀 블렌더 웹사이트 제작",
    desc: ["React를 활용한 팀 소개 사이트 제작"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url: "https://teamblender.co/",
        platform: url,
      },
    ],
  },
  {
    date: "2020/06/03",
    img: img1,
    title: "모지또 첫 출시",
    desc: ["모지또 iOS 버전 기획", "모지또 제작기 작성"],
    tags: ["PM", "기획"],
    channelArray: [
      {
        url:
          "https://apps.apple.com/kr/app/%EB%AA%A8%EC%A7%80%EB%98%90-%EB%8D%B0%EC%9D%BC%EB%A6%AC-%EC%9D%B4%EB%AA%A8%EC%A7%80-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC/id1508866668",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/126",
        platform: brunch,
      },
    ],
  },
];

updateHeader(MojittoHeader, MojittoContents);

export { MojittoHeader, MojittoContents };
