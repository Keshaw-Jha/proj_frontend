import React from "react";

interface wrapperComponent {
  children: React.ReactNode;
}

const AdminLayout: React.FC<wrapperComponent> = ({ children }) => {
  return <>{children};</>;
};

export default AdminLayout;
