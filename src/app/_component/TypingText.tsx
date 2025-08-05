"use client";

import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  typingSpeed: number;
  startDelay: number;
  style: string;
  isLastLine: boolean;
}

const TypingText = ({
  text,
  typingSpeed,
  startDelay,
  style,
  isLastLine,
}: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(-1);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIndex(0); // 타이핑 시작
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (index < 0 || index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex(index + 1);
    }, typingSpeed);

    if (index === text.length - 1) {
      setTimeout(() => {
        setIsTypingDone(true);
      }, 80); // 마지막 글자 이후 isTypingDone = true
    }

    return () => clearTimeout(timeout);
  }, [index, text]);

  const showCursor = index >= 0 && (!isTypingDone || isLastLine); // 아직 타이핑 중이거나 마지막 줄이면 커서 보임

  return (
    <p
      className={`relative z-10 whitespace-nowrap overflow-hidden
      ${style}`}
    >
      {displayed}
      {showCursor && (
        <span className="inline-block w-[2px] h-[1.1em] bg-white animate-blink ml-[1px] translate-y-[3px]" />
      )}
    </p>
  );
};

export default TypingText;
