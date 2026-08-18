import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MainBtn from "./MainBtn";
import { Plus } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import Modal from "./Modal";
import CountryForm from "../features/country/CountryForm";

export default function CountryOptions() {
	const [openModal, setOpenModal] = useState(false);

	function handleOpenModal() {
		setOpenModal((prev) => !prev);
	}

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
			<MainBtn onClick={handleOpenModal}>
				<Plus size={18} /> <span>Country</span>
			</MainBtn>
			<Modal onClose={handleOpenModal} open={openModal} title="Create Country">
				<CountryForm />
			</Modal>
		</div>
	);
}
