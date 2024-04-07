import React from "react";
import SideBar from "../Components/SideBar/SideBar";

function Layout({ children }) {
	return (
    <div className="flex">
      <SideBar />
      <div className="w-full md:w-1/4"></div>

      <div className="w-full md:w-3/4 m-auto">{children}</div>
    </div>
  );
}

export default Layout
