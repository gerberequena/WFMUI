import React from "react";
import { useGetCountryList } from "./useGetCountryList";

export default function CountryList() {
	const { countryData, isPending } = useGetCountryList();

	console.log(countryData);

	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>id</th>
					<th>Name</th>
					<th>SKU</th>
					<th>Sites</th>
				</tr>
			</thead>
			<tbody>
				{countryData?.map((country) => (
					<CountryDetails key={country.id} country={country} />
				))}
			</tbody>
		</table>
	);
}

function CountryDetails({ country }) {
	return (
		<tr>
			<td>{country.id}</td>
			<td>{country.country_name}</td>
			<td>{country.country_sku}</td>
			<td>{country?.site ? country?.site : "ADD SITE"}</td>
		</tr>
	);
}
