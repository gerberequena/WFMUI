import { useQuery } from "@tanstack/react-query";
import { getLocationsByCountry } from "../../services/apiGeo";

export default function useGetLocationsByCountry(countryId) {
	const normalizedCountryId = Number(countryId);

	const isValidCountryId =
		Number.isInteger(normalizedCountryId) && normalizedCountryId > 0;

	const {
		isPending,
		data: locationData = [],
		error,
	} = useQuery({
		queryKey: ["locationList", "byCountry", normalizedCountryId],
		queryFn: () => getLocationsByCountry(normalizedCountryId),
		enabled: isValidCountryId,
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, locationData, error };
}
