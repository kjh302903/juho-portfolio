import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  text: string;
}

const StyleLink = ({ id, text }: Props) => {
  return (
    <Link href={`#${id}`}>
      <li className="text-white text-md font-bold hover:brightness-90 cursor-pointer">
        {text}
      </li>
    </Link>
  );
};

export default StyleLink;
