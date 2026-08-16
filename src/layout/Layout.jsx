import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
	return (
		<div className="flex min-h-screen overflow-y-hidden">
			<Sidebar />
			<main className="flex-1 px-10 ">
				<Outlet />
			</main>
		</div>
	);
}
