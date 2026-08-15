import React from "react";
import CompanyLogo from "../ui/CompanyLogo";

export default function SidebarHeader() {
	return (
		<div className="flex gap-1 ">
			<div className="flex gap-1 justify-center items-center">
				<CompanyLogo />
				<p className="text-1xl font-bold tracking-tight text-white">WFM Capacity</p>
			</div>
			<div>
				<p className="rounded-md bg-slate-800 px-2 py-0.5 text-xs font-semibold tracking-wide text-blue-400">
					ENTERPRISE
				</p>
			</div>
		</div>
	);
}
