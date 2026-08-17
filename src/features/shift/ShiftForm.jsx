import React, { useState } from "react";
import useCreateShift from "./useCreateShift";

export default function ShiftForm() {
	const [shiftName, setShiftName] = useState("");
	const [shiftLength, setShiftLength] = useState("");
	const [paidHrs, setPaidHrs] = useState("");
	const [productiveHrs, setProductiveHrs] = useState("");
	const { createShiftFN, isCreatingShift } = useCreateShift();

	function handleSubmit(e) {
		e.preventDefault();

		if (!shiftName || !shiftLength || !paidHrs || !productiveHrs) return;

		createShiftFN(
			{
				shift_name: shiftName,
				shift_length_hrs: shiftLength,
				paid_hrs: paidHrs,
				productive_hrs: productiveHrs,
			},
			{
				onSettled: () => {
					(setShiftName(""),
						setShiftLength(""),
						setPaidHrs(""),
						setProductiveHrs(""));
				},
			},
		);
	}

	return (
		<form className="custom-form" onSubmit={handleSubmit}>
			<div>
				<label>Shift Name</label>
				<input
					value={shiftName}
					onChange={(e) => setShiftName(e.target.value)}
					disabled={isCreatingShift}
					type="text"
				/>
			</div>
			<div>
				<label>Shift Length Hrs</label>
				<input
					value={shiftLength}
					onChange={(e) => setShiftLength(e.target.value)}
					disabled={isCreatingShift}
					type="text"
				/>
			</div>
			<div>
				<label>Paid Hrs</label>
				<input
					value={paidHrs}
					onChange={(e) => setPaidHrs(e.target.value)}
					disabled={isCreatingShift}
					type="text"
				/>
			</div>
			<div>
				<label>Productive Hrs</label>
				<input
					value={productiveHrs}
					onChange={(e) => setProductiveHrs(e.target.value)}
					disabled={isCreatingShift}
					type="text"
				/>
			</div>

			<button>ADD NEW</button>
		</form>
	);
}
