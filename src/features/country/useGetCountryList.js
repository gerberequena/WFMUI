import { useQuery } from "@tanstack/react-query";
import { getContryList } from "../../services/apiGeo";

export function useGetCountryList() {
	const { isPending, data: countryData } = useQuery({
		queryKey: ["countriesList"],
		queryFn: getContryList,
		retry: false,
	});

	return { isPending, countryData };
}
