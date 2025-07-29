import React from "react";

interface Props {
  children: React.ReactNode;
}

const InnerContainer = ({ children }: Props) => {
  return <div className="mx-auto max-w-6xl px-2">{children}</div>;
};

export default InnerContainer;
