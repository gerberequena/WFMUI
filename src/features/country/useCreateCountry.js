import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry } from "../../services/apiGeo";

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
			queryClient.invalidateQueries({ queryKey: ["countriesList"] });
		},
		onError: (err) => {
			console.log(err);
		},
	});

	return { createCountryFN, isCreating, error, isError };
}
