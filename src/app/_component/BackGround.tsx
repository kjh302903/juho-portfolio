import React from "react";

interface Props {
  children: React.ReactNode;
}
const BackGround = ({ children }: Props) => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};

export default BackGround;
