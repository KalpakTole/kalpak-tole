import React from "react";
import NavbarMenu from "./NavbarMenu";
import FaceIcon from "@mui/icons-material/Face";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<FaceIcon
				className="small-logo"
				htmlColor="white"
				fontSize="large"
			/>
			<NavbarMenu />
		</div>
	);
};

export default Navbar;
