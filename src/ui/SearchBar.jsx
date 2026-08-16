import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
	return (
		<div className="flex items-center w-full max-w-md px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
			<Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
			<input
				className="w-full text-sm text-gray-900 bg-transparent placeholder-gray-400 focus:outline-none"
				value={value}
				type="text"
				placeholder="Buscar..."
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
