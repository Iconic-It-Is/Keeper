import { Copyright } from "@material-ui/icons";
import React from "react";

function Footer() {
	return (
		<footer>
			<p>
				<Copyright />
				{new Date().getFullYear()} Copyright: Aman Kuliyal{" "}
			</p>
		</footer>
	);
}

export default Footer;
