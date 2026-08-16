import { useQuery } from "@tanstack/react-query";
import { getCountryList } from "../../services/apiGeo";

export function useGetCountryList(search) {
	const { isPending, data: countryData = [] } = useQuery({
		queryKey: ["countriesList", search],
		queryFn: () => getCountryList(search),
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, countryData };
}
