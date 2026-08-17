import React from "react";
import CountryTable from "./CountryTable";
import CountryOptions from "../../ui/CountryOptions";

export default function Country() {
	return (
		<div className="flex flex-col gap-8">
			<CountryOptions />
			<CountryTable />
		</div>
	);
}
