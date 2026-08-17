import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Country from "./features/country/Country";
import { Toaster } from "react-hot-toast";
import CountryForm from "./features/country/CountryForm";
import LocationForm from "./features/location/LocationForm";
import LocationPerCountryTable from "./features/location/LocationPerCountryTable";

export default function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 0,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Navigate replace to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route path="/settings" element={<Settings />}>
							<Route path="country" element={<Country />} />
							<Route path="country-form" element={<CountryForm />} />
							<Route path="location-form/:countryID" element={<LocationForm />} />
							<Route
								path="locations-by-country/:countryID"
								element={<LocationPerCountryTable />}
							/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptions={{
					success: {
						duration: 3000,
					},
					error: {
						duration: 5000,
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
					},
				}}
			/>
		</QueryClientProvider>
	);
}
