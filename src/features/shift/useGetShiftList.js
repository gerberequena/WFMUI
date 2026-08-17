import { useQuery } from "@tanstack/react-query";
import { getShiftList } from "../../services/apiJobCategory";

export function useGetShiftList(search) {
	const { isPending, data: shiftData = [] } = useQuery({
		//7. We sent the search word into the key
		queryKey: ["shiftList", search],
		//7.1 We also sent the serach param or word into the get country list
		queryFn: () => getShiftList(search),
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, shiftData };
}
