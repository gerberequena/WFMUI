import React from "react";
import { useGetCountryList } from "./useGetCountryList";
import { Toaster } from "react-hot-toast";
import useDebounce from "../../hooks/useDebounce";
import { Link, useOutletContext, useSearchParams } from "react-router";
import BtnAction from "../../ui/BtnAction";
import { MapPlus } from "lucide-react";

export default function CountryTable() {
	const [searchParams] = useSearchParams();

	//5 We then look for the params as well on the search list
	const search = searchParams.get("search") ?? "";

	const debouncedSearch = useDebounce(search, 400);

	//6. We then  send the search key word
	const { countryData, isPending } = useGetCountryList(debouncedSearch);

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
			<td className="text-blue-500">
				{country?.location_count ? (
					<Link to={`/settings/locations-by-country/${country.id}`}>
						{country?.location_count}
					</Link>
				) : (
					<BtnAction>
						<Link to={`/settings/location-form/${country.id}`}>
							<MapPlus color="#66cc00" />
						</Link>
					</BtnAction>
				)}
			</td>
		</tr>
	);
}
