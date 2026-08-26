import React from "react";
import { Link } from "react-router";

export default function LinkBtn({ children, pathTo }) {
	return <Link to={pathTo}>{children}</Link>;
}
