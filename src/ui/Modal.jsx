import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

export default function Modal({
	open,
	onClose,
	title,
	children,
	maxWidth = "sm",
}) {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth={maxWidth}
			title="Create Shift Form"
		>
			{title && <DialogTitle>{title}</DialogTitle>}

			<DialogContent sx={{ display: "flex", justifyContent: "center" }}>
				{children}
			</DialogContent>
		</Dialog>
	);
}
