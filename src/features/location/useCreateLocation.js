import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCountry, createLocation } from "../../services/apiGeo";
import toast from "react-hot-toast";

export default function useCreateLocation() {
	const queryClient = useQueryClient();
	const {
		mutate: createLocationFn,
		isPending: isCreatingLocation,
		error,
		isError,
	} = useMutation({
		mutationFn: (newLocation) => createLocation(newLocation),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["countriesList"] });
			toast.success("New Location has been added");
		},
		onError: (err) => {
			toast.error("Location could not be created");
		},
	});

	return { createLocationFn, isCreatingLocation, error, isError };
}
