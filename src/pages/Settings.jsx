import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../layout/Header";

export default function Settings() {
	return (
		<div className="flex flex-col gap-8">
			<Header />

			<main>
				<Outlet />
			</main>
		</div>
	);
}
