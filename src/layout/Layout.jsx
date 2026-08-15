import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="flex min-h-screen overflow-y-hidden">
			<Sidebar />
			<main>
				<Outlet />
				Hola
			</main>
		</div>
	);
}
