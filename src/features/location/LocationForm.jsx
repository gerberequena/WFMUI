import React from "react";
import { useState } from "react";
import useCreateLocation from "./useCreateLocation";
import { useParams } from "react-router";

export default function CountryForm() {
	const { countryID } = useParams();
	const [locationName, setLocationName] = useState("");
	const [locationAddress, setLocationAddress] = useState("");
	const [locationState, setLocationState] = useState("");
	const [locationCity, setLocationCity] = useState("");

	const { createLocationFn, isCreatingLocation, error } = useCreateLocation();

	function handleSubmit(e) {
		e.preventDefault();

		if (
			!countryID ||
			!locationName ||
			!locationAddress ||
			!locationState ||
			!locationCity
		)
			return;

		createLocationFn(
			{
				country: countryID,
				location_name: locationName,
				location_address: locationAddress,
				location_state: locationState,
				location_city: locationCity,
			},
			{
				onSettled: () => {
					(setLocationName(""),
						setLocationAddress(""),
						setLocationState(""),
						setLocationCity(""));
				},
			},
		);
	}

	return (
		<form onSubmit={handleSubmit} className="custom-form">
			<div>
				<label>Country ID</label>
				<input disabled value={countryID} type="" />
			</div>
			<div>
				<label>Location Name</label>
				<input
					disabled={isCreatingLocation}
					value={locationName}
					type=""
					placeholder="Example: World Financial Center"
					onChange={(e) => setLocationName(e.target.value)}
				/>
			</div>
			<div>
				<label>Location Address</label>
				<input
					disabled={isCreatingLocation}
					value={locationAddress}
					type=""
					placeholder="Example: Diagonal 6 Z10"
					onChange={(e) => setLocationAddress(e.target.value)}
				/>
			</div>
			<div>
				<label>Location State</label>
				<input
					disabled={isCreatingLocation}
					value={locationState}
					type=""
					placeholder="Example: Guatemala"
					onChange={(e) => setLocationState(e.target.value)}
				/>
			</div>
			<div>
				<label>Location City</label>
				<input
					disabled={isCreatingLocation}
					value={locationCity}
					type=""
					placeholder="Example: Guatemala"
					onChange={(e) => setLocationCity(e.target.value)}
				/>
			</div>

			<button disabled={isCreatingLocation}>Create</button>
		</form>
	);
}
