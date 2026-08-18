import React, { useState } from "react";
import { useGetJobCategoryType } from "./useGetJobCategoryType";
import OptionSelect from "../../ui/OptionSelect";
import { useGetCountryList } from "../country/useGetCountryList";

export default function JobCategoryForm() {
	const { jobCategoryTypeData, isPending: isPendingJobType } =
		useGetJobCategoryType();
	const { countryData, isPending: isPedningCountry } = useGetCountryList();

	const [jobCategoryName, setJobCategoryName] = useState("");
	const [jobCategoryType, setJobCategoryType] = useState("");
	const [country, setCountry] = useState("");
	const [requiredDays, setRequiredDays] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!jobCategoryName || !country || !jobCategoryType || !requiredDays) return;

		console.log({
			job_category_name: jobCategoryName,
			country: country,
			job_category_type: jobCategoryType,
			required_shift_days: requiredDays,
		});
	}

	return (
		<form className="custom-form" onSubmit={handleSubmit}>
			<label>Job Category Name</label>
			<input
				value={jobCategoryName}
				onChange={(e) => setJobCategoryName(e.target.value)}
				type="text"
			/>
			<label>Job Type</label>
			<select
				value={jobCategoryType}
				onChange={(e) => setJobCategoryType(e.target.value)}
			>
				<option>Select Job Type</option>
				{jobCategoryTypeData?.map((jobCatType) => (
					<OptionSelect
						key={jobCatType.id}
						value={jobCatType.id}
						optionValue={jobCatType.job_category_type_name}
					/>
				))}
			</select>
			<label>Country</label>
			<select value={country} onChange={(e) => setCountry(e.target.value)}>
				<option>Select Country</option>
				{countryData?.map((country) => (
					<OptionSelect
						key={country.id}
						value={country.id}
						optionValue={country.country_name}
					/>
				))}
			</select>

			<label>Required Shift Days</label>
			<input
				value={requiredDays}
				onChange={(e) => setRequiredDays(e.target.value)}
				type="number"
			/>

			<button>ADD JOB</button>
		</form>
	);
}
