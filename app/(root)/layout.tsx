import NavBar from "../components/navbar";
import React, { ReactNode } from "react";

const rootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default rootLayout;
