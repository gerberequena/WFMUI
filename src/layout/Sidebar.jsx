import React from "react";
import CompanyLogo from "../ui/CompanyLogo";
import SidebarHeader from "./SidebarHeader";
import SidebarNavList from "./SidebarNavList";

export default function Sidebar() {
	return (
		<nav className="bg-primary-bg p-5 flex flex-col gap-10">
			{/* We need to place the logo */}
			<SidebarHeader />

			{/* We then managed to keep the menus */}
			<SidebarNavList />
		</nav>
	);
}
