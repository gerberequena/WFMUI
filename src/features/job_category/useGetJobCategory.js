import { useQuery } from "@tanstack/react-query";
import { getJobCategory } from "../../services/apiJobCategory";

export function useGetJobCategory() {
	const { isPending, data: jobCategoryData = [] } = useQuery({
		queryKey: ["jobCategoryData"],
		//7.1 We also sent the serach param or word into the get country list
		queryFn: () => getJobCategory(),
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, jobCategoryData };
}
