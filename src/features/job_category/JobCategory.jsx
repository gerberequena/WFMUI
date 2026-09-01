import React, { useState } from "react";
import JobCategoryForm from "./JobCategoryForm";
import { Plus } from "lucide-react";
import Modal from "../../ui/Modal";
import JobCategoryTable from "./jobCategoryTable";

export default function JobCategory() {
	const [showForm, setShowForm] = useState(false);
	const [filters, setFilters] = useState({
		jobCategoryName: "",
		country: "",
		jobCategoryType: "",
		requiredShiftDays: "",
		minShiftDays: "",
		maxShiftDays: "",
	});

	function handleFilterChange(e) {
		const { name, value } = e.target;

		setFilters((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleShowForm() {
		setShowForm(true);
	}

	function handleCloseForm() {
		setShowForm(false);
	}
	return (
		<div className="flex flex-col gap-5">
			{/* Create a table to visualze and creates  */}
			<div className="flex justify-end">
				<input
					name="jobCategoryName"
					value={filters.jobCategoryName}
					onChange={handleFilterChange}
					placeholder="Search job category"
				/>

				<input
					name="country"
					value={filters.country}
					onChange={handleFilterChange}
					placeholder="Country"
				/>

				<button
					onClick={handleShowForm}
					className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all active:scale-[0.98]  flex gap-3 items-center"
				>
					<Plus size={18} />
					<span>Job Category </span>
				</button>
			</div>

			<Modal open={showForm} onClose={handleCloseForm} title="Create Job Category">
				<JobCategoryForm onClose={handleCloseForm} />
			</Modal>

			<JobCategoryTable filters={filters} />
		</div>
	);
}
