import React from "react";
import SearchBar from "./SearchBar";
import MainBtn from "./MainBtn";
import { Plus } from "lucide-react";
import { Link, useSearchParams } from "react-router";

export default function CountryOptions() {
	//2. Definimos searchParams y setSearchParams con su hook
	const [searchParams, setSearchParams] = useSearchParams();

	//3. Definimos todo lo que sea search y si no existe el parametro que sea """
	const search = searchParams.get("search") ?? "";

	//4. Create the funtion to update the URL
	function handleSearchChange(value) {
		const nextParams = new URLSearchParams(searchParams);

		if (value.trim()) {
			//4.1 We then create the search params in the URL
			nextParams.set("search", value);
			// 4.2 i fthere is nothing then we delete the params
		} else {
			nextParams.delete("search");
		}

		setSearchParams(nextParams, {
			replace: true,
		});
	}

	return (
		<div className="flex justify-between">
			{/* we send the states to be able to modify them */}
			<SearchBar value={search} onChange={handleSearchChange} />
			<MainBtn>
				<Link to="country-form" className="flex gap-1.5">
					<Plus size={18} /> <span>Country</span>
				</Link>
			</MainBtn>
		</div>
	);
}
