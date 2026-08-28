import React from "react";

export default function ShiftPatternTable({ shiftPatternData }) {
	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>No.</th>
					<th>Shift</th>
					<th>Shift Qty</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{shiftPatternData?.map((shiftData, index) => (
					<TableRow key={index} shiftData={shiftData} index={index} />
				))}
			</tbody>
		</table>
	);
}

function TableRow({ shiftData }) {
	return (
		<tr>
			<td>{shiftData?.id}</td>
			<td>{shiftData?.shift_name}</td>
			<td>{shiftData?.shift_quantity}</td>
		</tr>
	);
}
