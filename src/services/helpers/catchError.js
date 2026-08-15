export function getErrorMessage(err) {
	const data = err.response?.data;

	if (!data) return "We could not connect with the server";

	if (typeof data === "object") {
		const firstField = Object.keys(data)[0];
		const firstError = data[firstField];
		if (Array.isArray(firstError)) return firstError[0];
		if (typeof firstError === "string") return firstError;
	}

	return data.detail || "An error has ocurred, please try again";
}
