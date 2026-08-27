import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { X } from "lucide-react";
import React from "react";

export default function Modal({
	open,
	onClose,
	title,
	children,
	maxWidth = "xs",
}) {
	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth} title="">
			<div className="flex justify-between">
				{title && <DialogTitle>{title}</DialogTitle>}
				<button className="mr-3 hover:cursor-pointer" onClick={onClose}>
					<X color="#666" />
				</button>
			</div>
			<DialogContent
				sx={{
					display: "flex",
					justifyContent: "center",
					padding: "10px",
					width: "100%",
				}}
			>
				{children}
			</DialogContent>
		</Dialog>
	);
}
