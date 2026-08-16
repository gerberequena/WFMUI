import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry } from "../../services/apiGeo";
import toast from "react-hot-toast";

export default function useCreateCountry() {
	const queryClient = useQueryClient();
	const {
		mutate: createCountryFN,
		isPending: isCreating,
		error,
		isError,
	} = useMutation({
		mutationFn: (newCountryData) => createCountry(newCountryData),
		onSuccess: () => {
			toast.success("New Country has been added");
			queryClient.invalidateQueries({ queryKey: ["countriesList"] });
		},
		onError: (err) => {
			console.log(err);
		},
	});

	return { createCountryFN, isCreating, error, isError };
}
