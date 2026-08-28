import React, { useState } from "react";
import { useGetJobCategoryType } from "./useGetJobCategoryType";
import OptionSelect from "../../ui/OptionSelect";
import { useGetCountryList } from "../country/useGetCountryList";
import useCreateJobCategory from "./useCreateJobCategory";

export default function JobCategoryForm({ onClose }) {
	const { jobCategoryTypeData, isPending: isPendingJobType } =
		useGetJobCategoryType();
	const { countryData, isPending: isPedningCountry } = useGetCountryList();
	const { isCreatingJobCategory, createJobCategoryFN } = useCreateJobCategory();

	const [jobCategoryName, setJobCategoryName] = useState("");
	const [jobCategoryType, setJobCategoryType] = useState("");
	const [country, setCountry] = useState("");
	const [requiredDays, setRequiredDays] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!jobCategoryName || !country || !jobCategoryType || !requiredDays) return;

		console.log({
			job_category_name: jobCategoryName,
			country: Number(country),
			job_category_type: Number(jobCategoryType),
			required_shift_days: Number(requiredDays),
		});

		createJobCategoryFN(
			{
				job_category_name: jobCategoryName,
				country: Number(country),
				job_category_type: Number(jobCategoryType),
				required_shift_days: Number(requiredDays),
			},
			{
				onSuccess: () => {
					onClose();
				},
			},
		);
	}

	return (
		<form className="custom-form" onSubmit={handleSubmit}>
			<label>Job Category Name</label>
			<input
				disabled={isCreatingJobCategory}
				value={jobCategoryName}
				onChange={(e) => setJobCategoryName(e.target.value)}
				type="text"
			/>
			<label>Job Type</label>
			<select
				disabled={isCreatingJobCategory}
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
			<select
				disabled={isCreatingJobCategory}
				value={country}
				onChange={(e) => setCountry(e.target.value)}
			>
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
				disabled={isCreatingJobCategory}
				value={requiredDays}
				onChange={(e) => setRequiredDays(e.target.value)}
				type="number"
			/>

			<button
				disabled={isCreatingJobCategory}
				className="highlighted-btn  w-full "
			>
				Create
			</button>
		</form>
	);
}
