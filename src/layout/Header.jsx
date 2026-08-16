import React from "react";
import { Bell, Dot } from "lucide-react";

export default function Header({ headerName, headerDescription }) {
	return (
		<div className="flex justify-between items-center border-b-2 border-b-brand-thirly py-4">
			{/* compoment for header title and description */}
			<div>
				<h2 className="text-xl font-bold text-gray-900">Organizational Settings</h2>
				<p className="text-sm text-gray-500">Live mode production settings</p>
			</div>
			{/* compoment for user, notificatin and mode and description */}
			<div className="flex gap-4 items-center">
				<div className="flex items-center rounded-md bg-brand-thirly px-0.5">
					<Dot color="#66cc00" size={40} />
					<span className="mr-4">Live mode</span>
				</div>
				<div>
					<Bell />
				</div>
				<div className="flex flex-col gap-0.5">
					<p className="text-sm">Gerber Reyes</p>
					<span className="text-xs">Capacity Planer</span>
				</div>
			</div>
		</div>
	);
}
