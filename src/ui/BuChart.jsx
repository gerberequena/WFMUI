import React from "react";
import {
	Line,
	LineChart,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import { Link } from "react-router";

export default function BuChart({ businessUnit }) {
	const { name } = businessUnit;

	const chartData = businessUnit.months.map((month, index) => ({
		month,
		required: businessUnit.required[index],
		scheduled: businessUnit.scheduled[index],
	}));

	const statusConfig = {
		understaffing: {
			label: "Understaffing",
			line: "#ef4444",
			badge: "bg-red-100 text-red-700",
		},
		target: {
			label: "On Target",
			line: "#16a34a",
			badge: "bg-green-100 text-green-700",
		},
		overstaffing: {
			label: "Overstaffing",
			line: "#f59e0b",
			badge: "bg-amber-100 text-amber-700",
		},
	};

	const status = statusConfig[businessUnit?.status];

	return (
		<div className="flex h-60.5 flex-col">
			{/* Chart header */}
			<div className="mb-2 flex items-start justify-between gap-3 p-3">
				<Link to="/settings/country">
					<h3 className="text-md font-semibold leading-tight text-gray-900">
						{businessUnit?.name}
					</h3>
				</Link>
				<span
					className={`shrink-0 rounded-full px-3 p-1 text-[10px] font-medium ${status.badge}`}
				>
					{status?.label}
				</span>
			</div>
			<div className="h-37.5 w-full">
				<ResponsiveContainer>
					<LineChart
						data={chartData}
						margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
					>
						<CartesianGrid stroke="#e5e7eb" vertical={false} />
						<XAxis
							dataKey="month"
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 11, fill: "#737373" }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 11, fill: "#737373" }}
						/>

						<Tooltip />
						<Line
							type="monotone"
							dataKey="required"
							stroke="#9ca3af"
							strokeWidth={2}
							strokeDasharray="5 4"
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="scheduled"
							stroke={status.line}
							strokeWidth={2.5}
							dot={false}
							activeDot={{ r: 5 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
