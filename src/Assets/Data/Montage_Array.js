import brunch from "../Images/Icons/brunch.png";
import instagram from "../Images/Icons/instagram.png";
import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Montage/montage_main.png";
import img1 from "../Images/Contents/Montage/montage_1.png";

import { updateHeader } from "./Data_Func";

const MontageHeader = {
  stage: "Detail",
  path: "montagegif",
  title: "Montage.gif",
  desc: (
    <>
      전체는 부분의 합보다 크다.<p></p>몽타주를 그리는 매거진
    </>
  ),
  channelArray: [
    {
      url: "https://montagegif.com/#/",
      platform: url,
    },
    {
      url: "https://www.instagram.com/montage.gif/",
      platform: instagram,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const MontageContents = [
  {
    date: "2021/12/26",
    img: img1,
    ratio: "1:1",
    title: "Montage.gif 창간",
    desc: ["Montage.gif 제작", "Montage.gif 제작기 글 작성"],
    tags: ["기획", "디자인", "개발", "콘텐츠"],
    channelArray: [
      {
        url: "https://montagegif.com/#/",
        platform: url,
      },
      {
        url: "https://www.instagram.com/montage.gif/",
        platform: instagram,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/178",
        platform: brunch,
      },
    ],
  },
];

updateHeader(MontageHeader, MontageContents);

export { MontageHeader, MontageContents };
