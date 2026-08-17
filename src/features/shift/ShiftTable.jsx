import React from "react";
import { useGetShiftList } from "./useGetShiftList";
import { useSearchParams } from "react-router";
import useDebounce from "../../hooks/useDebounce";

export default function ShiftTable() {
	const [searchParams] = useSearchParams();
	const search = searchParams.get("search") ?? "";
	const debouncedSearch = useDebounce(search, 400);
	const { shiftData, isPending } = useGetShiftList(debouncedSearch);

	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>No.</th>
					<th>Shift Name</th>
					<th>Shift Length</th>
					<th>Paid Hrs</th>
					<th>Productive Hrs</th>
				</tr>
			</thead>

			<tbody>
				{shiftData?.map((shift, index) => (
					<ShiftTableRow key={shift.id} shift={shift} index={index} />
				))}
			</tbody>
		</table>
	);
}

function ShiftTableRow({ shift, index }) {
	const { shift_name, shift_length_hrs, paid_hrs, productive_hrs } = shift;
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{shift_name}</td>
			<td>{shift_length_hrs}</td>
			<td>{paid_hrs}</td>
			<td>{productive_hrs}</td>
		</tr>
	);
}
