import React from "react";
import Header from "./header";
import Footer from "./footer";

interface wrapperComponent {
  children: React.ReactNode;
}

export const Layout: React.FC<wrapperComponent> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen text-center">
      {/* <div className="bg-orange-500 h-20">Header</div> */}
      <Header/>
      <div className="bg-slate-500 flex-grow flex items-center justify-center">
        {children}
      </div>
      <Footer/>
      {/* <div className="bg-teal-500 h-20">Footer</div> */}
    </div>
  );
};
