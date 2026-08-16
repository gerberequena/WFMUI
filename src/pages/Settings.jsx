import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "../layout/Header";
import CountryOptions from "../ui/CountryOptions";

export default function Settings() {
	const [countrySearch, setCountrySearch] = useState("");

	return (
		<div className="flex flex-col gap-8">
			<Header />
			<CountryOptions search={countrySearch} onSearchChange={setCountrySearch} />
			<main>
				<Outlet context={{ countrySearch }} />
			</main>
		</div>
	);
}
