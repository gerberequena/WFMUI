import React from "react";
import { useGetCountryList } from "./useGetCountryList";
import { Toaster } from "react-hot-toast";

export default function CountryList() {
	const { countryData, isPending } = useGetCountryList();

	console.log(countryData);

	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>Index</th>
					<th>Name</th>
					<th>SKU</th>
					<th>Locations</th>
				</tr>
			</thead>
			<tbody>
				{countryData?.map((country, index) => (
					<CountryDetails key={country.id} country={country} index={index} />
				))}
			</tbody>
		</table>
	);
}

function CountryDetails({ country, index }) {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{country.country_name}</td>
			<td>{country.country_sku}</td>
			<td>{country?.location_count ? country?.location_count : "ADD SITE"}</td>
		</tr>
	);
}
