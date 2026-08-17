import React from "react";
import useGetLocationsByCountry from "./useGetLocationsByCountry";
import { useParams } from "react-router";

export default function LocationPerCountryTable() {
	const { countryID } = useParams();

	const { locationData } = useGetLocationsByCountry(countryID);

	console.log(locationData);

	return <div>LocationPerCountry</div>;
}
