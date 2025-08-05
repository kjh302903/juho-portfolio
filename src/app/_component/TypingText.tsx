"use client";

import React, { useEffect, useState } from "react";

interface Props {
  text: string;
}

const TypingText = ({ text }: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex(index + 1);
    }, 80);

    return () => clearTimeout(timeout);
  }, [index, text]);

  return (
    <div
      className="relative z-10 whitespace-nowrap overflow-hidden text-white text-5xl
      after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full 
      after:border-r-4 after:border-white after:animate-blink"
    >
      {displayed}
    </div>
  );
};

export default TypingText;
