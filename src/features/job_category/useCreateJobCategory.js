import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobCategory } from "../../services/apiJobCategory";
import toast from "react-hot-toast";

export default function useCreateJobCategory() {
	const queryClient = useQueryClient();
	const {
		mutate: createJobCategoryFN,
		isPending: isCreatingJobCategory,
		error,
		isError,
	} = useMutation({
		mutationFn: (newJobCategory) => createJobCategory(newJobCategory),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["jobCategoryList"] });
			toast.success("New Job Category has been added");
		},
		onError: (err) => {
			console.log(err);
			toast.error("Job Category could not be created");
		},
	});

	return { createJobCategoryFN, isCreatingJobCategory, error, isError };
}
