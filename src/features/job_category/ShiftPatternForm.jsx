import { Plus, Trash2, Upload } from "lucide-react";
import React, { useState } from "react";

export default function ShiftPatternForm() {
	const emptyRow = {
		job_category: "",
		shift: "",
		shift_quantity: 0,
	};

	const [rows, setRows] = useState([{ ...emptyRow }]);

	function handleChange(index, field, value) {
		setRows((rows) =>
			rows.map((row, rowIndex) =>
				rowIndex === index
					? {
							...row,
							[field]: value,
						}
					: row,
			),
		);
	}

	function handleAddRow() {
		setRows((rows) => [...rows, { ...emptyRow }]);
	}

	function handleDeleteRow(index) {
		setRows((rows) => rows.filter((_, rowIndex) => rowIndex !== index));
	}

	function handleSubmit(e) {
		e.preventDefault();

		console.log(rows);
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5">
			<div className="flex justify-between items-center">
				<div>
					<h2 className="text-lg font-semibold">Shift Pattern</h2>

					<p className="text-sm text-gray-500">Assign shifts to job categories</p>
				</div>

				<button
					type="button"
					className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm"
				>
					<Upload size={16} />
					Import CSV
				</button>
			</div>

			<div className="border rounded-xl overflow-hidden">
				<table className="w-full">
					<thead className="bg-gray-50 border-b">
						<tr>
							<th className="text-left px-4 py-3 text-sm font-medium">Job Category</th>

							<th className="text-left px-4 py-3 text-sm font-medium">Shift</th>

							<th className="text-left px-4 py-3 text-sm font-medium">Quantity</th>

							<th className="w-16"></th>
						</tr>
					</thead>

					<tbody>
						{rows.map((row, index) => (
							<tr key={index} className="border-b last:border-b-0">
								<td className="p-3">
									{/* <select
										value={row.job_category}
										onChange={(e) => handleChange(index, "job_category", e.target.value)}
										className="w-full border rounded-lg px-3 py-2"
									>
										<option value="">Select category</option>

										{jobCategoryData.map((category) => (
											<option key={category.id} value={category.id}>
												{category.job_category_name}
											</option>
										))}
									</select> */}
								</td>

								<td className="p-3">
									{/* <select
										value={row.shift}
										onChange={(e) => handleChange(index, "shift", e.target.value)}
										className="w-full border rounded-lg px-3 py-2"
									>
										<option value="">Select shift</option>

										{shiftData.map((shift) => (
											<option key={shift.id} value={shift.id}>
												{shift.shift_name}
											</option>
										))}
									</select> */}
								</td>

								<td className="p-3">
									<input
										type="number"
										min="1"
										value={row.shift_quantity}
										onChange={(e) =>
											handleChange(index, "shift_quantity", Number(e.target.value))
										}
										className="w-full border rounded-lg px-3 py-2"
									/>
								</td>

								<td className="p-3">
									<button
										type="button"
										onClick={() => handleDeleteRow(index)}
										className="p-2 hover:bg-red-50 rounded-lg text-red-500"
									>
										<Trash2 size={17} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<button
					type="button"
					onClick={handleAddRow}
					className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 w-full border-t"
				>
					<Plus size={16} />
					Add row
				</button>
			</div>

			<div className="flex justify-end">
				<button
					type="submit"
					className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
				>
					Save {rows.length} rows
				</button>
			</div>
		</form>
	);
}
