import brunch from "../Images/Icons/brunch.png";
import url from "../Images/Icons/url.png";
import mainImg from "../Images/Contents/Free/free_main.png";
import img1 from "../Images/Contents/Free/free_1.png";

import { updateHeader } from "./Data_Func";

const FreeHeader = {
  stage: "Detail",
  path: "free",
  title: "퇴준생",
  desc: (
    <>
      본격 퇴사 준비생을 위한 앱<p></p>퇴사 D-Day를 설정하고 퇴사를
      준비해보세요!
    </>
  ),
  channelArray: [
    {
      url:
        "https://apps.apple.com/kr/app/%ED%87%B4%EC%A4%80%EC%83%9D/id1582656121",
      platform: url,
    },
  ],
  mainImg: mainImg,
  tags: [],
  lastUpdate: { date: null, title: null, index: null },
};

const FreeContents = [
  {
    date: "2021/08/28",
    img: img1,
    title: "퇴준생 첫 출시",
    desc: ["React Native를 활용한 퇴준생 앱 제작", "퇴준생 제작기 글 작성"],
    tags: ["기획", "디자인", "개발"],
    channelArray: [
      {
        url:
          "https://apps.apple.com/kr/app/%ED%87%B4%EC%A4%80%EC%83%9D/id1582656121",
        platform: url,
      },
      {
        url: "https://brunch.co.kr/@vicotorlee/171",
        platform: brunch,
      },
    ],
  },
];

updateHeader(FreeHeader, FreeContents);

export { FreeHeader, FreeContents };
