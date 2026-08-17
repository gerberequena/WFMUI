import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry } from "../../services/apiGeo";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function useCreateCountry() {
	const navigate = useNavigate();
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
			navigate("/settings/country", { replace: true });
		},
		onError: (err) => {
			console.log(err);
		},
	});

	return { createCountryFN, isCreating, error, isError };
}
