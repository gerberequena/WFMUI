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

export async function getContryList() {
	try {
		const { data } = await axiosInstance.get("/countries/location_counts/");
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
