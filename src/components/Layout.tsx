import React from "react";

interface wrapperComponent {
  children: React.ReactNode;
}

export const Layout: React.FC<wrapperComponent> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-orange-500 h-20">Header</div>
      <div className="bg-slate-500 flex-grow flex items-center justify-center">
        {children}
      </div>
      <div className="bg-teal-500 h-20">Footer</div>
    </div>
  );
};
