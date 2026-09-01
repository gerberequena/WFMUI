import { useQuery } from "@tanstack/react-query";
import { getJobCategory } from "../../services/apiJobCategory";

export function useGetJobCategory(id = null, filters = {}) {
	const {
		isPending,
		data: jobCategoryData,
		error,
	} = useQuery({
		queryKey: id ? ["jobCategory", id] : ["jobCategoryList", filters],

		queryFn: () => getJobCategory(id, filters),

		staleTime: 30_000,
		retry: false,
	});

	return {
		isPending,
		jobCategoryData,
		error,
	};
}
