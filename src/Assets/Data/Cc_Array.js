import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Cc/cc_main.png";
import img1 from "../Images/Contents/Cc/cc_1.png";
import { updateHeader } from "./Data_Func";

const CcHeader = {
  stage: "Detail",
  path: "cc",
  title: "Creatures Creativity",
  desc: (
    <>
      어느 날, 당신이 세상의 창조주가 된다면?<p></p>나의 첫번째 SF 소설
    </>
  ),
  channelArray: [
    {
      url: "https://ridibooks.com/books/645000301?_s=instant&_q=creature",
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
          item: "대한민국 전자출판대상 1회, 장려상 수상",
          status: null,
        },
      ],
    },
  ],
};

const CcContents = [
  {
    date: "2014/11/06",
    img: img1,
    title: "Creatures Creativity 출판",
    desc: ["C.C 소설 집필", "리디북스 E북 출간"],
    tags: ["작가"],
    channelArray: [
      {
        url: "https://ridibooks.com/books/645000301?_s=instant&_q=creature",
        platform: url,
      },
    ],
  },
];

updateHeader(CcHeader, CcContents);

export { CcHeader, CcContents };
