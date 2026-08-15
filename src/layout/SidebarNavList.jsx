import React, { useState } from "react";
import { Link } from "react-router";

const navListElements = [
	{
		name: "Overview",
		navlinks: [
			{
				linkName: "Requirements",
				navPath: "/requirements",
			},
			{
				linkName: "workforce",
				navPath: "/workforce",
			},
		],
	},
	{
		name: "Settings",
		navlinks: [
			{
				linkName: "Country",
				navPath: "/settings/country",
			},
			{
				linkName: "Job Categories",
				navPath: "/job_category",
			},
		],
	},
];

export default function SidebarNavList() {
	return (
		<div className="flex flex-col gap-4">
			{navListElements?.map((mainLinkItem) => (
				<LinkList key={mainLinkItem.name} linksData={mainLinkItem} />
			))}
		</div>
	);
}

function LinkList({ linksData }) {
	const { name, navlinks } = linksData;
	const [onShow, setOnShow] = useState(false);

	function handleSetOnShow() {
		setOnShow((prev) => !prev);
	}

	return (
		<div>
			<button
				className="text-brand-thirly font-bold tracking-tight"
				onClick={() => handleSetOnShow()}
			>
				{name}
			</button>
			{onShow && (
				<ul className="mx-6">
					{navlinks.map((item) => (
						<LinkItem key={item.linkName} linkItem={item} />
					))}
				</ul>
			)}
		</div>
	);
}

function LinkItem({ linkItem }) {
	return (
		<li className="w-full">
			<Link className="text-brand-fourthly" to={linkItem.navPath}>
				{linkItem.linkName}
			</Link>
		</li>
	);
}
