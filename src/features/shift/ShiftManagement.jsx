import React, { useState } from "react";
import ShiftTable from "./ShiftTable";
import ShiftForm from "./ShiftForm";
import SearchBar from "../../ui/SearchBar";
import MainBtn from "../../ui/MainBtn";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Modal from "../../ui/Modal";

export default function ShiftManagement() {
	const [showForm, setShowForm] = useState(false);

	function handleShowForm() {
		setShowForm((prev) => !prev);
	}

	return (
		<div className="flex  flex-col  justify-between gap-10">
			<div className="flex justify-between">
				<SearchBar />
				<button
					onClick={handleShowForm}
					className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all active:scale-[0.98]  flex gap-3 items-center"
				>
					<Plus size={18} />
					<span>Shift</span>
				</button>
			</div>
			<div className="flex w-full justify-between">
				<ShiftTable />
				<Modal onClose={handleShowForm} open={showForm} title="Create Shift Form">
					<ShiftForm />
				</Modal>
			</div>
		</div>
	);
}
