import React from "react";
import BackGround from "./BackGround";
import MultiLineTypingText from "./MultiLineTypingText";

const Intro = () => {
  return (
    <BackGround>
      <MultiLineTypingText
        lines={[
          "프론트엔드 개발자 강주호입니다.",
          "사용자의 입장에서 생각하며, 더 나은 웹을 만드는 개발자가 되고 싶습니다.",
          "빠르게 변화하는 웹 트렌드에 관심이 많고, 지속적인 성장을 지향합니다.",
        ]}
        lineStyle={[
          "text-4xl text-[#64FFDA]",
          "text-2xl text-[#F1F2F5]",
          "text-2xl text-[#F1F2F5]",
        ]}
      />
    </BackGround>
  );
};

export default Intro;
