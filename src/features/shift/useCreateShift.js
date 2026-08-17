import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { createShift } from "../../services/apiJobCategory";

export default function useCreateShift() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const {
		mutate: createShiftFN,
		isPending: isCreatingShift,
		error,
		isError,
	} = useMutation({
		mutationFn: (newShiftData) => createShift(newShiftData),
		onSuccess: () => {
			toast.success("New Shift has been added");
			queryClient.invalidateQueries({ queryKey: ["shiftList"] });
		},
		onError: (err) => {
			toast.error("It could not be created");
		},
	});

	return { createShiftFN, isCreatingShift, error, isError };
}
