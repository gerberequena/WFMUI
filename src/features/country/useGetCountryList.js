import { useQuery } from "@tanstack/react-query";
import { getCountryList } from "../../services/apiGeo";

export function useGetCountryList(search) {
	const { isPending, data: countryData = [] } = useQuery({
		//7. We sent the search word into the key
		queryKey: ["countriesList", search],
		//7.1 We also sent the serach param or word into the get country list
		queryFn: () => getCountryList(search),
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, countryData };
}
