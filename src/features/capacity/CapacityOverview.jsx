import React from "react";
import Header from "../../layout/Header";
import BuChart from "../../ui/BuChart";

const capacityByBU = [
	{
		id: "cc",
		name: "WLS Care",
		status: "understaffing",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [
			180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 195,
			196,
		],

		scheduled: [
			169, 168, 169, 170, 170, 171, 172, 172, 173, 174, 173, 175, 174, 176, 177,
			179,
		],

		current: {
			scheduled: 169,
			required: 180,
			gap: -11,
			coveragePct: 93.9,
		},

		cluster: "CS&S",
	},

	{
		id: "ts",
		name: "Channel Care",
		status: "target",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [
			140, 140, 141, 141, 142, 142, 143, 143, 144, 144, 145, 145, 146, 146, 147,
			148,
		],

		scheduled: [
			143, 143, 143, 144, 143, 144, 145, 144, 146, 146, 145, 147, 146, 148, 149,
			151,
		],

		current: {
			scheduled: 143,
			required: 139,
			gap: 4,
			coveragePct: 102.9,
		},

		cluster: "TBS",
	},

	{
		id: "sr",
		name: "SMB",
		status: "overstaffing",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [
			95, 96, 96, 97, 97, 98, 98, 99, 99, 100, 100, 101, 102, 102, 103, 104,
		],

		scheduled: [
			108, 109, 109, 110, 109, 110, 111, 111, 112, 112, 113, 113, 112, 113, 114,
			115,
		],

		current: {
			scheduled: 108,
			required: 95,
			gap: 13,
			coveragePct: 113.7,
		},

		cluster: "SD",
	},

	{
		id: "billing",
		name: "Goco",
		status: "target",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [
			109, 109, 110, 110, 111, 111, 111, 112, 112, 112, 111, 111, 110, 111, 112,
			113,
		],

		scheduled: [
			112, 113, 112, 113, 113, 113, 114, 114, 114, 114, 113, 114, 114, 115, 115,
			116,
		],

		current: {
			scheduled: 112,
			required: 109,
			gap: 3,
			coveragePct: 102.8,
		},

		cluster: "TBS",
	},

	{
		id: "backoffice",
		name: "Back office",
		status: "understaffing",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [71, 71, 72, 73, 74, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83],

		scheduled: [63, 63, 63, 64, 64, 65, 64, 65, 65, 65, 66, 66, 67, 68, 69, 70],

		current: {
			scheduled: 63,
			required: 71,
			gap: -8,
			coveragePct: 88.7,
		},

		cluster: "SD",
	},

	{
		id: "onboarding",
		name: "Onboarding",
		status: "target",

		months: [
			"12-sept",
			"19-sept",
			"26-sept",
			"03-oct",
			"10-oct",
			"17-oct",
			"24-oct",
			"31-oct",
			"07-nov",
			"14-nov",
			"21-nov",
			"28-nov",
			"05-dic",
			"12-dic",
			"19-dic",
			"26-dic",
		],

		required: [55, 55, 56, 56, 55, 56, 56, 57, 56, 57, 57, 56, 57, 58, 58, 59],

		scheduled: [55, 56, 56, 56, 55, 57, 58, 57, 56, 56, 57, 58, 57, 58, 60, 59],

		current: {
			scheduled: 55,
			required: 55,
			gap: 0,
			coveragePct: 100,
		},

		cluster: "TBS",
	},
];

export default function CapacityOverview() {
	return (
		<div className="flex flex-col gap-8">
			<Header headerName="Capacity Overview" />
			<OverviewKPIs data={capacityByBU} />

			<section className="rounded-xl bg-white p-6">
				<div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
					{capacityByBU?.map((businessUnit) => (
						<BuChart key={businessUnit.id} businessUnit={businessUnit} />
					))}
				</div>
			</section>
		</div>
	);
}

function OverviewKPIs({ data }) {
	const totals = data.reduce(
		(acc, businessUnit) => {
			acc.scheduled += businessUnit.current.scheduled;
			acc.required += businessUnit.current.required;

			return acc;
		},
		{
			scheduled: 0,
			required: 0,
		},
	);

	const globalCoverage =
		totals.required > 0 ? (totals.scheduled / totals.required) * 100 : 0;

	const fteGap = totals.scheduled - totals.required;

	const understaffing = data.filter(
		(businessUnit) => businessUnit.status === "understaffing",
	).length;

	const overstaffing = data.filter(
		(businessUnit) => businessUnit.status === "overstaffing",
	).length;

	const kpis = [
		{
			label: "Global Coverage",
			value: `${globalCoverage.toFixed(1)}%`,
			description: `${totals.scheduled} / ${totals.required} FTE`,
			valueStyle:
				globalCoverage >= 98 && globalCoverage <= 105
					? "text-green-600"
					: "text-red-600",
		},
		{
			label: "FTE Gross",
			value: `${fteGap > 0 ? "+" : ""}${fteGap} FTE`,
			description: "Scheduled vs required",
			valueStyle:
				fteGap === 0
					? "text-green-600"
					: fteGap > 0
						? "text-amber-600"
						: "text-red-600",
		},
		{
			label: "Understaffing",
			value: understaffing,
			description: "Business units below target",
			valueStyle: "text-red-600",
		},
		{
			label: "Overstaffing",
			value: overstaffing,
			description: "Business units above target",
			valueStyle: "text-amber-600",
		},
	];

	return (
		<section className="px-6">
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
				{kpis.map((kpi) => (
					<div
						key={kpi.label}
						className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
					>
						<p className="text-xs font-medium text-gray-500">{kpi.label}</p>

						<div className="mt-1 flex items-end justify-between">
							<h2 className={`text-xl font-semibold tracking-tight ${kpi.valueStyle}`}>
								{kpi.value}
							</h2>
						</div>

						<p className="mt-1 text-[10px] text-gray-400">{kpi.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
