"use client";

import React from "react";
import TypingText from "./TypingText";

interface Props {
  lines: string[];
  lineStyle: string[];
}

const MultiLineTypingText = ({ lines, lineStyle }: Props) => {
  const baseSpeed = 50; // 글자당 타이핑 속도
  const lineGap = 300; // 줄 간 여유 시간(ms)

  let currentDelay = 0;

  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        const delay = currentDelay;
        const isLast = idx === lines.length - 1;
        currentDelay += line.length * baseSpeed + lineGap;

        return (
          <TypingText
            key={idx}
            text={line}
            typingSpeed={baseSpeed}
            startDelay={delay}
            style={lineStyle[idx]}
            isLastLine={isLast}
          />
        );
      })}
    </div>
  );
};

export default MultiLineTypingText;
