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

export async function getJobCategoryType() {
	try {
		const { data } = await axiosInstance.get("/job-category-type/");
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function createJobCategory({
	job_category_name,
	job_category_type,
	country,
	required_shift_days,
}) {
	try {
		const { data } = await axiosInstance.post("/job-category/", {
			job_category_name,
			job_category_type,
			country,
			required_shift_days,
		});
		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		console.log(err);
		throw new Error(message);
	}
}

export async function getJobCategory(id = null) {
	try {
		const url = id ? `/job-category/${id}/` : "/job-category/";

		const { data } = await axiosInstance.get(url);

		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}

export async function getJobCategoryShiftPatterns(jobCategoryID = null) {
	try {
		const { data } = await axiosInstance.get("/job-category-shift-pattern/", {
			params: jobCategoryID ? { job_category: jobCategoryID } : {},
		});

		return data;
	} catch (err) {
		const message = getErrorMessage(err);
		throw new Error(message);
	}
}
