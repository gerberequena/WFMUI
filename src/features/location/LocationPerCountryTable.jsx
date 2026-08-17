import React from "react";
import useGetLocationsByCountry from "./useGetLocationsByCountry";
import { Link, useParams } from "react-router";
import { MonitorSmartphone } from "lucide-react";

export default function LocationPerCountryTable() {
	const { countryID } = useParams();

	const { locationData } = useGetLocationsByCountry(countryID);

	console.log(locationData);

	return (
		<table className="custom-table">
			<thead>
				<tr>
					<th>No.</th>
					<th>Site Name</th>
					<th>Location Address</th>
					<th>Location State</th>
					<th>Location City</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{locationData?.map((locationData, index) => (
					<RowDataLocationByCountry
						key={locationData.id}
						locationData={locationData}
						index={index}
					/>
				))}
			</tbody>
		</table>
	);
}

function RowDataLocationByCountry({ locationData, index }) {
	const { location_address, location_city, location_name, location_state } =
		locationData;

	return (
		<tr>
			<td>{index + 1}</td>
			<td>{location_name}</td>
			<td>{location_address}</td>
			<td>{location_state}</td>
			<td>{location_city}</td>
			<td>
				<Link to="">
					<MonitorSmartphone />
				</Link>
			</td>
		</tr>
	);
}
