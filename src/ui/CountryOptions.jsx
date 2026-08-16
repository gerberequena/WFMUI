import React from "react";
import SearchBar from "./SearchBar";
import MainBtn from "./MainBtn";
import { Plus } from "lucide-react";

export default function CountryOptions({ search, onSearchChange }) {
	return (
		<div className="flex justify-between">
			<SearchBar value={search} onChange={onSearchChange} />
			<MainBtn>
				<div className="flex gap-1.5">
					<Plus size={18} /> <span>Country</span>
				</div>
			</MainBtn>
		</div>
	);
}
