import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetJobCategory } from "./useGetJobCategory";
import { useGetJobCategoryShiftPatterns } from "./useGetJobCategoryShifts";
import ShiftPatternTable from "./ShiftPatternTable";

export default function JobCategoryShiftsForm() {
	const { jobCategoryID } = useParams();
	const { jobCategoryData, isPending: isLoadingJobCategory } =
		useGetJobCategory(jobCategoryID);

	const { shiftPatternData, isPending: isLoadingShiftPatterns } =
		useGetJobCategoryShiftPatterns(jobCategoryID);
	const emptyRow = { jobCategory: "", shift: "", shiftQuantity: 1 };
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

	console.log(shiftPatternData);

	function handleAddRow() {
		setRows((rows) => [...rows, { ...emptyRow }]);
	}

	function handleDeleteRow() {
		setRows((row) => row.filter((_, rowIndex) => rowIndex !== index));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(rows);
	}

	if (isLoadingJobCategory) {
		return <p>Waiting..</p>;
	}

	return (
		<div className="flex flex-col gap-10">
			<div>
				<h3 className="text-2xl">{jobCategoryData.job_category_name}</h3>
				<div className="flex justify-self-start gap-20">
					<p className="flex gap-2">
						Required Shift: <span>{jobCategoryData.required_shift_days}</span>
					</p>
					<p>{jobCategoryData.job_category_type_name}</p>
					<p>{jobCategoryData.country_name}</p>
				</div>
			</div>

			<ShiftPatternTable shiftPatternData={shiftPatternData} />

			<div>
				{rows?.map((shiftRow, index) => (
					<ShiftPatternRow shiftRow={shiftRow} key={index} />
				))}
			</div>
		</div>
	);
}

function ShiftPatternRow() {
	return <form></form>;
}
