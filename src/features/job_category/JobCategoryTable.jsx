import React from "react";
import { useGetJobCategory } from "./useGetJobCategory";
import LinkBtn from "../../ui/LinkBtn";

export default function JobCategoryTable() {
	const { isPending, jobCategoryData } = useGetJobCategory();

	return (
		<table className="custom-table">
			{/* showe all the job category tables ifno */}
			<thead>
				<tr>
					<th>No.</th>
					<th>Name</th>
					<th>Country</th>
					<th>Type</th>
					<th>Required Days</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				{jobCategoryData?.map((jobCategory, index) => (
					<JobCategoryRow
						key={jobCategory.id}
						index={index}
						jobCategory={jobCategory}
					/>
				))}
			</tbody>
		</table>
	);
}

function JobCategoryRow({ jobCategory, index }) {
	const {
		id,
		job_category_name,
		country_name,
		job_category_type_name,
		required_shift_days,
	} = jobCategory;

	return (
		<tr>
			<td>{index + 1}</td>
			<td>{job_category_name}</td>
			<td>{country_name}</td>
			<td>{job_category_type_name}</td>
			<td>{required_shift_days}</td>
			<td>
				<LinkBtn pathTo={`/settings/job-category-shifts/${id}`}>Modified</LinkBtn>
			</td>
		</tr>
	);
}
