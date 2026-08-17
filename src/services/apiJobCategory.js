import axiosInstance from "./axiosInstance";
import { getErrorMessage } from "./helpers/catchError";

export async function getShiftList(search = "") {
	try {
		//8. We normalize the param key word to remove space
		const normalizedSearch = search.trim();
		const { data } = await axiosInstance.get("/shifts/", {
			params: normalizedSearch ? { search: normalizedSearch } : {},
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function createShift({
	shift_name,
	shift_length_hrs,
	paid_hrs,
	productive_hrs,
}) {
	try {
		const { data } = await axiosInstance.post("/shifts/", {
			shift_name,
			shift_length_hrs,
			paid_hrs,
			productive_hrs,
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}
