import React from "react";

export default function MainBtn({ children }) {
	return (
		<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all active:scale-[0.98]">
			{children}
		</button>
	);
}
