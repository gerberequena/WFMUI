import React from "react";
import SearchBar from "./SearchBar";
import MainBtn from "./MainBtn";
import { Plus } from "lucide-react";
import { useSearchParams } from "react-router";

export default function CountryOptions() {
	const [searchParams, setSearchParams] = useSearchParams();

	const search = searchParams.get("search") ?? "";

	function handleSearchChange(value) {
		const nextParams = new URLSearchParams(searchParams);

		if (value.trim()) {
			nextParams.set("search", value);
		} else {
			nextParams.delete("search");
		}

		setSearchParams(nextParams, {
			replace: true,
		});
	}

	return (
		<div className="flex justify-between">
			<SearchBar value={search} onChange={handleSearchChange} />
			<MainBtn>
				<div className="flex gap-1.5">
					<Plus size={18} /> <span>Country</span>
				</div>
			</MainBtn>
		</div>
	);
}
