import React from "react";
import SideBar from "../Components/SideBar/SideBar";

function Layout({ children }) {
	return (
		<div className="flex">
			<div className="w-1/5 min-h-[100vh]">
				<SideBar />
			</div>

			<div className="w-4/5">
				{children}
			</div>

		</div>
	)
}

export default Layout
