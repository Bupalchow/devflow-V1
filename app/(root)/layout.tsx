import NavBar from "../components/navbar";
import React, { ReactNode } from "react";
import LeftSidebar from "../components/LeftSidebar";

const rootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex background-light850_dark100 relative">
      <NavBar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default rootLayout;
