import React from "react";
import InnerContainer from "./InnerContainer";
import Link from "next/link";
import StyleLink from "./StyleLink";

const GlobalNavigationBar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[rgba(0,0,0,.6)]">
      <InnerContainer>
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <p className="text-white text-xl font-bold cursor-pointer hover:brightness-95 ">
              Juho&apos;s Portfolio
            </p>
          </Link>
          <ul className="flex items-center gap-6">
            <StyleLink id="profile" text="Profile" />
            <StyleLink id="skills" text="Skills" />
            <StyleLink id="projects" text="Projects" />
          </ul>
        </div>
      </InnerContainer>
    </nav>
  );
};

export default GlobalNavigationBar;
