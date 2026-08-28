import { useQuery } from "@tanstack/react-query";
import { getJobCategoryShiftPatterns } from "../../services/apiJobCategory";

export function useGetJobCategoryShiftPatterns(jobCategoryID = null) {
	const {
		isPending,
		data: shiftPatternData = [],
		error,
	} = useQuery({
		queryKey: ["jobCategoryShiftPatterns", jobCategoryID],

		queryFn: () => getJobCategoryShiftPatterns(jobCategoryID),

		enabled: !!jobCategoryID,

		staleTime: 30_000,
		retry: false,
	});

	return {
		isPending,
		shiftPatternData,
		error,
	};
}
