import React from "react";
import Header from "./header";
import Footer from "./footer";
import CustomParticles from "./particles";

interface wrapperComponent {
  children: React.ReactNode;
}

export const Layout: React.FC<wrapperComponent> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-center overflow-scroll md:overflow-hidden">
      <Header />
      <CustomParticles />
      <div className="grow flex items-center justify-center bg-gradient-to-r from-[#5D0E41] to-[#00224D] ">
        {children}
      </div>
      <Footer />
    </div>
  );
};
