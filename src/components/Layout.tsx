import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import CustomParticles from "./particles";
import HashLoader from "react-spinners/HashLoader";

interface wrapperComponent {
  children: React.ReactNode;
}

export const Layout: React.FC<wrapperComponent> = ({ children }) => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const handleParticlesLoaded = () => {
    setParticlesLoaded(true);
  };

  return (
    <div className="flex flex-col h-screen text-center overflow-scroll md:overflow-hidden ">
      <Header />
      <CustomParticles handleParticlesLoaded={handleParticlesLoaded} />
      {!particlesLoaded && (
        <div className=" grow flex justify-center items-center bg-pink-950">
          <HashLoader color="#ffc9af" />
        </div>
      )}
      <div
        className="grow flex items-center justify-center bg-gradient-to-r from-[#5D0E41] to-[#00224D] "
        style={{
          opacity: particlesLoaded ? 1 : 0,
          transition: "opacity 0.7s",
          display: particlesLoaded ? "inherit" : "none",
        }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
