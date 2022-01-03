import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Tides/tides_main.png";

import { updateHeader } from "./Data_Func";

const TidesHeader = {
  stage: "Detail",
  path: "tides",
  title: "Tides",
  desc: (
    <>
      내게 와닿은 링크를 간직하세요!<p></p>Who knows what the tide could bring.
    </>
  ),
  channelArray: [
    {
      url:
        "https://www.instagram.com/p/Bxm43VqDRa2/?utm_source=ig_web_copy_link",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const TidesContents = [
  {
    date: "2019/05/20",
    title: "Tides 제작",
    desc: [
      "Javascript/AWS를 활용한 Tides 웹사이트 제작",
      "서버비 발생으로 현재는 제공 중단",
    ],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url:
          "https://www.instagram.com/p/Bxm43VqDRa2/?utm_source=ig_web_copy_link",
        platform: url,
      },
    ],
  },
];

updateHeader(TidesHeader, TidesContents);

export { TidesHeader, TidesContents };
