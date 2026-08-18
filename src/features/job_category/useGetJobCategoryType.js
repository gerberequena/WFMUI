import { useQuery } from "@tanstack/react-query";
import { getJobCategoryType } from "../../services/apiJobCategory";

export function useGetJobCategoryType() {
	const { isPending, data: jobCategoryTypeData = [] } = useQuery({
		queryKey: ["jobCategoryTypeData"],
		//7.1 We also sent the serach param or word into the get country list
		queryFn: () => getJobCategoryType(),
		staleTime: 30_000,
		retry: false,
	});

	return { isPending, jobCategoryTypeData };
}
