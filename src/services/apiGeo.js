import axiosInstance from "./axiosInstance";
import { getErrorMessage } from "./helpers/catchError";

export async function createCountry({ country_name, country_sku }) {
	try {
		const { data } = await axiosInstance.post("/countries/", {
			country_name,
			country_sku,
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function getCountryList(search = "") {
	try {
		//8. We normalize the param key word to remove space
		const normalizedSearch = search.trim();
		const { data } = await axiosInstance.get("/countries/location_counts/", {
			params: normalizedSearch ? { search: normalizedSearch } : {},
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function createLocation({
	country,
	location_name,
	location_address,
	location_state,
	location_city,
}) {
	try {
		const { data } = await axiosInstance.post("/locations/", {
			country,
			location_name,
			location_address,
			location_state,
			location_city,
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function getLocationsByCountry(countryId) {
	const normalizedCountryId = Number(countryId);

	if (!Number.isInteger(normalizedCountryId) || normalizedCountryId <= 0) {
		throw new Error("A valid country ID is required");
	}

	try {
		const { data } = await axiosInstance.get("/locations/", {
			params: {
				country: normalizedCountryId,
			},
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}
