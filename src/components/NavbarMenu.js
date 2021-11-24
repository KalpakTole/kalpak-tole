import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./NavbarMenu.css";

const NavbarMenu = () => {
	// let isNavbarOpen = false;
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const toggleNavigationBar = () => {
		console.log(isNavbarOpen);
		const primaryNav = document.querySelector(".navbar-menu");
		const navToggle = document.querySelector(".mobile-nav-toggle");
		const visibility = primaryNav.getAttribute("data-visible") === "true";
		primaryNav.setAttribute("data-visible", !visibility);
		navToggle.setAttribute("aria-expanded", !visibility);
		setIsNavbarOpen(!isNavbarOpen);
	};
	return (
		<>
			{isNavbarOpen ? (
				<CloseIcon
					htmlColor="white"
					fontSize="large"
					className="mobile-nav-toggle"
					aria-controls="primary-navigation"
					aria-expanded="false"
					onClick={toggleNavigationBar}
				/>
			) : (
				<MenuRoundedIcon
					htmlColor="white"
					fontSize="large"
					className="mobile-nav-toggle"
					aria-controls="primary-navigation"
					aria-expanded="false"
					onClick={toggleNavigationBar}
				/>
			)}

			<div
				id="primary-navigation"
				data-visible="false"
				className="navbar-menu"
			>
				<NavbarMenuItem itemNo="01" itemName="Home" />
				<NavbarMenuItem itemNo="02" itemName="About" />
				<NavbarMenuItem itemNo="03" itemName="Work" />
				<NavbarMenuItem itemNo="04" itemName="Contact" />
			</div>
		</>
	);
};

export default NavbarMenu;
