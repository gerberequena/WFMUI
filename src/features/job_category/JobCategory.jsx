import React, { useState } from "react";
import JobCategoryForm from "./JobCategoryForm";
import { Plus } from "lucide-react";
import Modal from "../../ui/Modal";
import JobCategoryTable from "./jobCategoryTable";

export default function JobCategory() {
	const [showForm, setShowForm] = useState(false);

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
				<button
					onClick={handleShowForm}
					className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all active:scale-[0.98]  flex gap-3 items-center"
				>
					<Plus size={18} />
					<span>Job Category </span>
				</button>
			</div>

			<Modal open={showForm} onClose={handleCloseForm} title="Create Job Category">
				<JobCategoryForm />
			</Modal>

			<JobCategoryTable />
		</div>
	);
}
