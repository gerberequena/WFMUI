import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Country from "./features/country/Country";

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
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
