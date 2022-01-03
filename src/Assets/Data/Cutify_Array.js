import brunch from "../Images/Icons/brunch.png";
import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Cutify/cutify_main.png";
import img1 from "../Images/Contents/Cutify/cutify_1.png";
import img2 from "../Images/Contents/Cutify/cutify_2.png";
import { updateHeader } from "./Data_Func";

const CutifyHeader = {
  stage: "Detail",
  path: "cutify",
  title: "Cutify",
  desc: (
    <>
      귀여움을 큐레이션 합니다!<p></p>웨일/크롬 브라우저 확장 프로그램
    </>
  ),
  channelArray: [
    {
      url: "https://cutify.link/",
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
          item: "사용자 수 1000명 돌파",
          status: null,
        },
      ],
    },
  ],
};

const CutifyContents = [
  {
    date: "2021/12/06",
    img: img2,
    title: "Cutify 출시",
    desc: ["Cutify 크리스마스 테마 적용"],
    tags: ["개발"],
    channelArray: [
      {
        url: "https://cutify.link/",
        platform: url,
      },
    ],
  },
  {
    date: "2020/08/29",
    img: img1,
    title: "Cutify 출시",
    desc: [
      "Cutify 익스텐션 제작",
      "Cutify 링크트리 웹사이트 개발",
      "Cutify 제작기 글 작성",
    ],
    tags: ["기획", "개발"],
    channelArray: [
      {
        url: "https://cutify.link/",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/146",
        platform: brunch,
      },
    ],
  },
];

updateHeader(CutifyHeader, CutifyContents);

export { CutifyHeader, CutifyContents };
