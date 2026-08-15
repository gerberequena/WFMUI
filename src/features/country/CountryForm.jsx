import React, { useState } from "react";
import useCreateCountry from "./useCreateCountry";

export default function CountryForm() {
	const [countryName, setCountryName] = useState("");
	const [countrySKU, setCountrySKU] = useState("");
	const { createCountryFN, isCreating, error } = useCreateCountry();

	function handleSubmit(e) {
		e.preventDefault();

		if (!countryName || !countrySKU) return;

		createCountryFN(
			{
				country_name: countryName,
				country_sku: countrySKU,
			},
			{
				onSettled: () => {
					(setCountryName(""), setCountrySKU(""));
				},
			},
		);
	}

	return (
		<form onSubmit={handleSubmit} className="custom-form">
			<div>
				<label>Country Name</label>
				<input
					disabled={isCreating}
					value={countryName}
					type=""
					placeholder="Example: United States"
					onChange={(e) => setCountryName(e.target.value)}
				/>
			</div>
			<div>
				<label>Country SKU</label>
				<input
					disabled={isCreating}
					value={countrySKU}
					type=""
					placeholder="Example: US"
					onChange={(e) => setCountrySKU(e.target.value)}
				/>
			</div>

			<button disabled={isCreating}>Create</button>
		</form>
	);
}
